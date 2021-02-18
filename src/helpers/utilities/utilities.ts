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

/**
 * Make a theme and add the style to the DOM
 *
 * @method css
 *
 * @param styles the array of template strings
 * @param themes an array of theme values to substitute
 */
const css = (styles: TemplateStringsArray, ...themes: string[]): string => {
  const style = document.createElement('style')
  const parsedCss = styles
    .map((style, i) => `${style}${themes[i] ?? ''}`)
    .join('')
  style.innerHTML = parsedCss
  document.body.appendChild(style)
  return parsedCss
}

/**
 * Throttle a method to prevent spamming
 *
 * @method throttle
 *
 * @param callback the callback to fire when not throttled
 * @param timeout the amount of time to wait in milliseconds
 */
const throttle = (callback: any, timeout = 15): any => {
  let throttled = false
  return (...args: any[]) => {
    let val
    if (!throttled) {
      val = callback.apply(this, args)
      throttled = true
      setTimeout(() => {
        throttled = false
      }, timeout)
    }
    return val
  }
}

export { truncateString, randomNumber, newArray, truthy, css, throttle }
