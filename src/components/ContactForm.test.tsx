import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('shows validation errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /start a project/i }))

    expect(screen.getByText(/tell us your name/i)).toBeInTheDocument()
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/about your project/i)).toBeInTheDocument()
  })

  it('shows a success state after a valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'Ada Lovelace')
    await user.type(screen.getByLabelText(/email/i), 'ada@galbore.media')
    await user.type(
      screen.getByLabelText(/project details/i),
      'We would love a launch film for our new product.',
    )
    await user.click(screen.getByRole('button', { name: /start a project/i }))

    expect(await screen.findByText(/message received/i)).toBeInTheDocument()
  })
})
