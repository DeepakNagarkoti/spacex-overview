import { getParamsData } from '../getParamsData'

describe('return the param data', () => {
  it('should return the param data', () => {
    const entries = 'test=2030'
    const expected = '2030'
    expect(getParamsData(entries)).toEqual(expected)
  })
})
