import { beautifyNumber } from './number'

describe('beautifyNumber', () => {
  it('beautifyNumber function works successfully', () => {
    const text = 2
    expect(beautifyNumber(text)).toBe('2.00')
  })
})
