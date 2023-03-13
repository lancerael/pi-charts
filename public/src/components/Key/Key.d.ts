import { ValueConfig, KeyParams, D3Svg, Dimensions } from '../../types/';
export declare const totalMargin: (values: ValueConfig[], i?: number) => number;
/**
 * The Key shows how the colors represent the data
 *
 * @class Key
 * @constructor
 */
export declare class Key {
    /**
     * d3 object for axis container
     *
     * @property d3Svg
     */
    d3Svg: D3Svg;
    /**
     * The key's config values
     *
     * @property values
     */
    values: ValueConfig[];
    /**
     * The x offset for the key
     *
     * @property offsetX
     */
    dimensions: Dimensions;
    /**
     * Constructor function that sets up the local object.
     *
     * @method constructor
     * @param {Object} d3Svg A d3 wrapped container element
     * @param {Array} values the config for the data to be displayed
     * @param {Integer} dimensions the chart dimensions
     */
    constructor({ d3Svg, values, dimensions }: KeyParams);
    /**
     * Render the key showing the labels for the color values
     *
     * @method render
     * @chainable
     */
    render(): void;
}
