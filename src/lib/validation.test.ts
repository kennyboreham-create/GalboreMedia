import { describe, expect, it } from 'vitest'
import { isValidEmail, validateContactForm } from './validation'

describe('isValidEmail', () => {
  it('accepts a normal address', () => {
    expect(isValidEmail('hello@galbore.media')).toBe(true)
  })

  it('trims surrounding whitespace', () => {
    expect(isValidEmail('  hello@galbore.media  ')).toBe(true)
  })

  it.each(['', 'hello', 'hello@', 'hello@site', 'a b@site.com'])(
    'rejects invalid address %j',
    (value) => {
      expect(isValidEmail(value)).toBe(false)
    },
  )
})

describe('validateContactForm', () => {
  it('returns no errors for a fully valid submission', () => {
    const errors = validateContactForm({
      name: 'Ada Lovelace',
      email: 'ada@galbore.media',
      message: 'We would love a brand film for our launch.',
    })
    expect(errors).toEqual({})
  })

  it('flags every empty field', () => {
    const errors = validateContactForm({ name: '', email: '', message: '' })
    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.message).toBeTruthy()
  })

  it('flags a malformed email', () => {
    const errors = validateContactForm({
      name: 'Grace',
      email: 'not-an-email',
      message: 'A ten plus character message.',
    })
    expect(errors.email).toBeTruthy()
    expect(errors.name).toBeUndefined()
  })

  it('flags a too-short message', () => {
    const errors = validateContactForm({
      name: 'Grace',
      email: 'grace@galbore.media',
      message: 'short',
    })
    expect(errors.message).toBeTruthy()
  })
})
