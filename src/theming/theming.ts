import { Theme, ThemeList } from '../types'
import { truthy } from '../helpers/utilities'
import dark from './themes/dark.json'
import light from './themes/light.json'

const themes: ThemeList = { dark, light }

/**
 * Add a custom theme
 *
 * @method setTheme
 *
 * @param themeName the ID for the theme
 * @param theme the object containing the theme
 */
const addTheme = (themeName: string, theme: Theme): Theme =>
  (themes[themeName] = theme)

const parseThemeVariables = (themeName: string): string => {
  const variableStyle: string = Object.entries(themes[themeName]).map(
    ([key, val]: [string, string]): string => `--${key}: ${val};`
  ).join(`
  `)
  return `:root {
    ${variableStyle}
  }`
}

const addStyleToDom = (
  selector: string,
  css: string,
  replace?: boolean
): void => {
  let styleTag = document.querySelector(`[data-selector=${selector}]`)
  if (styleTag === null) {
    styleTag = document.createElement('style')
    styleTag.setAttribute('data-selector', selector)
    document.head.appendChild(styleTag)
  }
  styleTag.innerHTML = `${truthy(replace) ? '' : styleTag.innerHTML} ${css}`
}

const setTheme = (themeName: string): void => {
  addStyleToDom('pic-variables', parseThemeVariables(themeName), true)
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
  const parsedCss = styles
    .map((style, i) => `${style}${themes[i] ?? ''}`)
    .join('')
  addStyleToDom('pic-styles', parsedCss)
  return parsedCss
}

export { addTheme, setTheme, css }
