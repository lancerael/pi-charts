import { truncateString, randomNumber, newArray, truthy } from './'

describe('truncateString', () => {
  it('should truncate a string', () => {
    expect(truncateString('qwertyuiop', 6)).toBe('qwerty[...]')
  })

  it('should not try to truncate a string if it is shorter than the maxLength', () => {
    expect(truncateString('qwertyuiop', 10)).toBe('qwertyuiop')
  })
})

describe('randomNumber', () => {
  it('should generate a random integer from default values', () => {
    const random = randomNumber()
    expect(typeof random).toBe('number')
    expect(random).toBeGreaterThanOrEqual(0)
    expect(random).toBeLessThanOrEqual(10000)
  })

  it('should generate a random integer from provided values', () => {
    const random = randomNumber(3, 6)
    expect(typeof random).toBe('number')
    expect(random).toBeGreaterThanOrEqual(3)
    expect(random).toBeLessThanOrEqual(6)
  })

  it('should omit specified number from the randomly generated integer ', () => {
    // Randomly generated 10x a number between 2-3 while omitting 3
    newArray(10, () => randomNumber(2, 3, 3)).forEach((random) => {
      expect(random).toBe(2)
    })
  })
})

describe('newArray', () => {
  it('should generate an array', () => {
    const generatedArray = newArray(3, () => 5)
    expect(Array.isArray(generatedArray)).toBe(true)
    expect(generatedArray.length).toBe(3)
    expect(generatedArray[0]).toBe(5)
    expect(generatedArray[1]).toBe(5)
    expect(generatedArray[2]).toBe(5)
  })
})

describe('truthy', () => {
  it('should handle strings', () => {
    expect(truthy('something')).toBe(true)
    expect(truthy('')).toBe(false)
  })
  it('should handle numbers', () => {
    expect(truthy(1)).toBe(true)
    expect(truthy(0)).toBe(false)
  })
  it('should handle boolean', () => {
    expect(truthy(true)).toBe(true)
    expect(truthy(false)).toBe(false)
  })
  it('should handle arrays', () => {
    expect(truthy([])).toBe(true)
    expect(truthy([false])).toBe(true)
  })
  it('should handle null', () => {
    expect(truthy(null)).toBe(false)
  })
  it('should handle undefined', () => {
    expect(truthy(undefined)).toBe(false)
    expect(truthy()).toBe(false)
  })
})
