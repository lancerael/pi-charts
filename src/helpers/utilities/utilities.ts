/**
 * Truncates a string and adds ellipsis.
 *
 * @method truncateString
 *
 * @param value string to be truncated
 * @param maxLength max length of string before truncation
 * @return truncated string
 */
const truncateString = (value: string, maxLength: number): string => {
  return value.length > maxLength ? `${value.slice(0, maxLength)}[...]` : value
}

/**
 * Generates a random number within a range.
 *
 * @method randomNumber
 *
 * @param min minimum random value
 * @param max max random value
 * @param omit specify a value to omit from results
 * @return new random number
 */
const randomNumber = (min = 0, max = 10000, omit?: number): number => {
  let int = Math.floor(Math.random() * (min - max - 1)) + max + 1
  while (int === omit) int = randomNumber(min, max)
  return int
}

/**
 * Generates a new array of a desired length and maps its values.
 *
 * @method newArray
 *
 * @param length length of new array required
 * @param mapper the function that maps the values
 * @return new mapped array
 */
const newArray = (
  length: number,
  mapper: (val: any, i?: number) => any
): any[] => new Array(length).fill(null).map(mapper)

/**
 * Quick way to check for null values.
 *
 * @method exists
 *
 * @param value the value to check
 * @return whether the value is not null and truthy
 */
const truthy = (value: any = undefined): boolean => {
  if (value === null || value === undefined) return false
  return Boolean(value)
}

export { truncateString, randomNumber, newArray, truthy }
