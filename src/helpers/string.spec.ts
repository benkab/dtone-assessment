import { capitalize } from './string'

describe('capitalize', () => {
  it('capitalize function works successfully', () => {
    const text = 'text'
    expect(capitalize(text)).toBe('Text')
  })
})
