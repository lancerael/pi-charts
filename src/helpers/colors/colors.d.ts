import { RGBColor } from 'd3-color'
import { BackgroundContrast, RGBSimple, ValueConfig } from '../../types'
/**
 * Used to filter random colour rgb values and ensure high contrast against background.
 * Returns true if the color contrast is on the correct side of the boundary.
 *
 * @method colorFilter
 *
 * @param rgbValues [r, g, b] tuple array of RGB rgb values
 * @param backgroundType the type of backgroun;d light/dark to filter for contrast
 * @param brightnessBoundary the brightness value to filter against
 * @return specify whether the rgb values pass or fail
 */
declare const colorFilter: (
  [r, g, b]: RGBSimple,
  backgroundContrast?: BackgroundContrast,
  brightnessBoundary?: number
) => boolean
/**
 * Generate a random 0-255 number for an RGB value
 *
 * @method random256
 *
 * @return Random 256 number
 */
declare const random256: () => number
/**
 * Returns a random color (D3 object)
 *
 * @method randomColor
 *
 * @param backgroundType the type of background light/dark to filter for contrast
 * @param brightnessBoundary the brightness value to filter against
 * @return randomly generated RGB object
 */
declare const randomColor: (
  backgroundContrast?: BackgroundContrast,
  brightnessBoundary?: number
) => RGBColor
/**
 * Returns a random color palette
 *
 * @method randomPalette
 *
 * @param length the size of the palette
 * @return list of randomly generated RGB objects
 */
declare const randomPalette: (length?: number) => RGBColor[]
/**
 * Returns a darker version of a color
 *
 * @method darkerColor
 *
 * @param color RGB object
 * @return darker RGB object
 */
declare const darkerColor: (color: RGBColor) => RGBColor
/**
 * Adds colour rgbvalues to the config array of key rgbvalues
 *
 * @method addColorsToConfig
 *
 * @param configValues the config values needing colours
 * @param bAddRgb add RGB object or not?
 * @return A modified version of rgbvalues containing colours
 */
declare const addColorsToConfig: (
  configValues: ValueConfig[],
  addRGB?: boolean
) => ValueConfig[]
export {
  colorFilter,
  random256,
  randomColor,
  randomPalette,
  darkerColor,
  addColorsToConfig,
}
