import { ContactForm } from './components/ContactForm'
import { Icon } from './components/icons'
import { Reveal } from './components/Reveal'
import { services, stats } from './data/site'

const marqueeItems = [
  'Brand Awareness',
  'Marketing',
  'SEO',
  'Social Media',
  'Websites & Apps',
  'Ontario, Canada',
]

function App() {
  return (
    <div className="page">
      <div className="aurora" aria-hidden="true">
        <span className="aurora__blob aurora__blob--1" />
        <span className="aurora__blob aurora__blob--2" />
        <span className="aurora__blob aurora__blob--3" />
      </div>

      <header className="nav">
        <a className="nav__brand" href="#top">
          <span className="nav__logo" aria-hidden="true" />
          Galbore<span className="grad">Media</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#pricing">Who we help</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn--primary nav__cta" href="#contact">
          Add your project
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <Reveal>
            <span className="badge">
              <span className="badge__dot" aria-hidden="true" />
              Ontario, Canada creative studio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero__title">
              We make brands <span className="grad grad--anim">impossible</span>{' '}
              to ignore.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero__lead">
              Galbore Media is a bold, affordable creative studio for small
              businesses and not-for-profits: brand awareness, marketing, SEO,
              social media, and websites &amp; apps, all in one place.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href="#contact">
                Add your project
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <dt className="stat__value grad">{stat.value}</dt>
                  <dd className="stat__label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span className="marquee__item" key={i}>
                  {item}
                  <span className="marquee__star">✦</span>
                </span>
              ),
            )}
          </div>
        </div>

        <section id="services" className="section">
          <Reveal>
            <div className="section__head">
              <p className="eyebrow">What we do</p>
              <h2>
                Everything you need to <span className="grad">grow</span>
              </h2>
            </div>
          </Reveal>
          <div className="services">
            {services.map((service, i) => (
              <Reveal delay={i * 100} key={service.title}>
                <article className="service">
                  <div className="service__glow" aria-hidden="true" />
                  <div className="service__badge">
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="section">
          <Reveal>
            <div className="pitch">
              <div className="pitch__glow" aria-hidden="true" />
              <p className="eyebrow">Made for main street</p>
              <h2>
                Big-studio creative,{' '}
                <span className="grad">small-business pricing</span>
              </h2>
              <p className="pitch__lead">
                We focus on small businesses and not-for-profits: the teams who
                need standout branding and marketing the most. Fair, transparent,
                budget-friendly pricing with no bloated agency retainers.
              </p>
              <div className="pitch__tags">
                <span className="pill">Small businesses</span>
                <span className="pill">Not-for-profits</span>
                <span className="pill pill--accent">Affordable, flat pricing</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <Reveal className="contact__intro">
            <p className="eyebrow">Start here</p>
            <h2>
              Add your project <span className="grad">online</span>
            </h2>
            <p>
              Tell us about your project right here on the website. No calls
              required to get going. Fill out the form and we'll reply within one
              business day with next steps.
            </p>
            <ul className="contact__list">
              <li>Affordable rates for small businesses &amp; not-for-profits</li>
              <li>Transparent, fixed-scope proposals</li>
              <li>Brand, marketing, SEO, social &amp; web, all in one place</li>
            </ul>
            <p className="contact__where">
              <span className="badge__dot" aria-hidden="true" />
              Proudly based in Ontario, Canada
            </p>
          </Reveal>
          <Reveal className="contact__panel" delay={120}>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Galbore Media, Ontario, Canada</span>
        <span className="footer__made">
          Brand · Marketing · SEO · Social · Web &amp; Apps
        </span>
      </footer>
    </div>
  )
}

export default App
