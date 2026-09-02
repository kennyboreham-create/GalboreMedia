export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim())
}

/**
 * Validate the contact form. Returns a map of field -> error message.
 * An empty object means the form is valid.
 */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'An email is required so we can reply.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'That email address looks incomplete.'
  }

  const message = values.message.trim()
  if (!message) {
    errors.message = 'Let us know a little about your project.'
  } else if (message.length < 10) {
    errors.message = 'A few more details would help (10+ characters).'
  }

  return errors
}
