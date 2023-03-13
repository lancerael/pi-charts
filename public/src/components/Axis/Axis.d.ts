import { Dimensions, AxisParams } from '../../types';
/**
 * The Axis object is used to instantiate x and y axes, and the chart labels
 *
 * @class Axis
 * @constructor
 */
export declare class Axis {
    /**
     * SVG d3 object for d3 operations on the chart
     *
     * @property svgSelection
     */
    private readonly d3Svg;
    /**
     * Amount to truncate axis labels to
     *
     * @property truncate
     */
    private readonly truncate;
    /**
     * Collection of axis labels
     *
     * @property axisLabels
     */
    private readonly axisLabels?;
    /**
     * Scales for the axes
     *
     * @property scales
     */
    private readonly scales;
    /**
     * Chart's tooltip object
     *
     * @property tooltip
     * @type {Object}
     */
    private readonly tooltip;
    /**
     * The current calculated diensions of the chart
     *
     * @property dimensions
     */
    private dimensions;
    /**
     * The D3 selection for the X axis group
     *
     * @property axisGroupX
     */
    private readonly axisGroupX;
    /**
     * The D3 selection for the Y axis group
     *
     * @property axisGroupX
     */
    private readonly axisGroupY;
    /**
     * Constructor function which sets up the local object.
     *
     * @method constructor
     * @param d3Svg containing d3 SVG
     * @param tooltip tooltip div
     * @param dimensions chart dimensions
     * @param truncate text truncate length
     * @param axisLabels chart axis labels
     * @param scales chart axis scales
     * @throws {Error} invalid parameters
     */
    constructor({ d3Svg, tooltip, dimensions, truncate, axisLabels, scales, }: AxisParams);
    /**
     * Master render to call all rendering methods
     *
     * @method render
     */
    render(dimensions?: Dimensions): void;
    /**
     * Render the x axis
     *
     * @method renderAxisX
     */
    renderAxisX(): void;
    /**
     * Render the y axis
     *
     * @method renderAxisY
     */
    renderAxisY(): void;
    /**
     * Render the labels
     *
     * @method renderLabels
     */
    renderLabels(): void;
}
