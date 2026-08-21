import { useState } from 'react'
import { ContactForm } from './components/ContactForm'
import { Icon } from './components/icons'
import { projects, services, stats } from './data/site'

const categories = ['All', 'Film', 'Brand', 'Web', 'Social'] as const
type Category = (typeof categories)[number]

function App() {
  const [filter, setFilter] = useState<Category>('All')

  const visibleProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <div className="page">
      <header className="nav">
        <a className="nav__brand" href="#top">
          <span className="nav__logo" aria-hidden="true" />
          GalboreMedia
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn--primary nav__cta" href="#contact">
          Start a project
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <p className="eyebrow">Creative media studio</p>
          <h1 className="hero__title">
            Stories that <span className="grad">move</span> people.
          </h1>
          <p className="hero__lead">
            GalboreMedia is a full-service studio crafting film, brand, and
            digital experiences for ambitious teams. We turn ideas into work the
            world remembers.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Start a project
            </a>
            <a className="btn btn--ghost" href="#work">
              See our work
            </a>
          </div>

          <dl className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt className="stat__value">{stat.value}</dt>
                <dd className="stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="services" className="section">
          <div className="section__head">
            <p className="eyebrow">What we do</p>
            <h2>Services built for modern brands</h2>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <Icon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section__head">
            <p className="eyebrow">Selected work</p>
            <h2>Recent projects</h2>
          </div>

          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={
                  'chip' + (filter === category ? ' chip--active' : '')
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {visibleProjects.map((project) => (
              <article className="work-card" key={project.title}>
                <div className="work-card__media" aria-hidden="true">
                  <span className="work-card__tag">{project.category}</span>
                </div>
                <div className="work-card__body">
                  <h3>{project.title}</h3>
                  <p>
                    {project.client} · {project.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact__intro">
            <p className="eyebrow">Let's talk</p>
            <h2>Have a project in mind?</h2>
            <p>
              Tell us about your goals and we'll put together a plan. No pitch
              decks required — just a conversation about what you want to build.
            </p>
            <ul className="contact__list">
              <li>Kickoff call within 48 hours</li>
              <li>Transparent, fixed-scope proposals</li>
              <li>Senior team on every project</li>
            </ul>
          </div>
          <div className="contact__panel">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} GalboreMedia</span>
        <span className="footer__made">Crafted with care.</span>
      </footer>
    </div>
  )
}

export default App
