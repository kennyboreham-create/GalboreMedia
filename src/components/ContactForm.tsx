import { useState, type FormEvent } from 'react'
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../lib/validation'

const EMPTY: ContactFormValues = { name: '', email: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof ContactFormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setValues(EMPTY)
    }
  }

  if (submitted) {
    return (
      <div className="contact-success" role="status">
        <div className="contact-success__check" aria-hidden="true">
          ✓
        </div>
        <h3>Thanks — message received.</h3>
        <p>The Galbore Media team will be in touch within one business day.</p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Ada Lovelace"
        />
        {errors.name && <p className="field__error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@company.com"
        />
        {errors.email && <p className="field__error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us what you're building..."
        />
        {errors.message && <p className="field__error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn--primary btn--block">
        Add my project
      </button>
    </form>
  )
}
