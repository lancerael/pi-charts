/**
 * Truncates a string and adds ellipsis.
 *
 * @method truncateString
 *
 * @param value string to be truncated
 * @param maxLength max length of string before truncation
 * @return truncated string
 */
declare const truncateString: (value: string, maxLength: number) => string
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
declare const randomNumber: (
  min?: number,
  max?: number,
  omit?: number
) => number
/**
 * Generates a new array of a desired length and maps its values.
 *
 * @method newArray
 *
 * @param length length of new array required
 * @param mapper the function that maps the values
 * @return new mapped array
 */
declare const newArray: (
  length: number,
  mapper: (val: any, i?: number) => any
) => any[]
/**
 * Quick way to check for null values.
 *
 * @method exists
 *
 * @param value the value to check
 * @return whether the value is not null and truthy
 */
declare const truthy: (value?: any) => boolean
/**
 * Throttle a method to prevent spamming
 *
 * @method throttle
 *
 * @param callback the callback to fire when not throttled
 * @param timeout the amount of time to wait in milliseconds
 */
declare const throttle: (callback: any, timeout?: number) => any
/**
 * Used to create a new DOM node and append to parent
 *
 * @method createNode
 *
 * @param type the tag name of the node
 * @param className the class to apply to the node
 * @param parent the place where we append the node
 */
declare const createNode: (
  type: string,
  className?: string,
  parent?: HTMLElement
) => HTMLElement
/**
 * Strips newlines and multi-spaces from a string
 *
 * @method compress
 *
 * @param value the string to be compressed
 * @return the compressed string
 */
declare const flatten: (value: string) => string
/**
 * Strips all spaces and newlines from a string
 *
 * @method compress
 *
 * @param value the string to be compressed
 * @return the compressed string
 */
declare const compress: (value: string) => string
/**
 * Strips non alphanumeric characters from a string
 *
 * @method sanitise
 *
 * @param value the string to be sanitised
 * @return the sanitised string
 */
declare const sanitise: (value: string) => string
export {
  truncateString,
  randomNumber,
  newArray,
  truthy,
  throttle,
  createNode,
  flatten,
  compress,
  sanitise,
}
