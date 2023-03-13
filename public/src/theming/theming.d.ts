import { Theme } from '../types';
/**
 * Adds CSS to style tag, creating/replacing if necessarry
 *
 * @method addStyleToDom
 *
 * @param selector selector for later identification of style tag
 * @param css the CSS to be added
 * @param replace whether to replace or append new style
 */
declare const addStyleToDom: (selector: string, css: string, replace?: boolean) => void;
/**
 * Add a custom theme
 *
 * @method addTheme
 *
 * @param themeName the ID for the theme
 * @param theme the object containing the theme
 * @return the new theme
 */
declare const addTheme: (themeName: string, theme: Theme) => Theme;
/**
 * Gets a theme
 *
 * @method getTheme
 *
 * @param themeName the ID for the theme
 * @return the requested theme
 */
declare const getTheme: (themeName: string) => Theme;
/**
 * Updates the CSS theme variables with the selected theme
 *
 * @method publishTheme
 *
 * @param themeName the ID for the theme
 * @param theme the object containing the theme
 * @return the new theme
 */
declare const publishTheme: (themeName: string) => string;
/**
 * Make a theme and add the style to the DOM
 *
 * @method css
 *
 * @param styles the array of template strings
 * @param themes an array of theme values to substitute
 */
declare const css: (styles: TemplateStringsArray, ...themes: string[]) => string;
export { addStyleToDom, addTheme, getTheme, publishTheme, css };
