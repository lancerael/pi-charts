import 'd3-transition';
import { ChartScales, D3Group, Dimensions, TableConfig, TableData, VisualParams, VisualRenderParams } from '../../types';
import { Tooltip } from '../';
/**
 * Create BarCharts from the supplied data, based on the JSON config.
 *
 * @class BarChart
 * @constructor
 */
export declare class Bars {
    /**
     * The local collection of bars
     *
     * @property bars
     * @type {Array}
     */
    bars: any[];
    /**
     * The D3 selection for the SVG group
     *
     * @property chartGroup
     */
    chartGroup: D3Group;
    /**
     * The config for the chart
     *
     * @property config
     */
    config: TableConfig;
    /**
     * The data for the chart
     *
     * @property dataSet
     */
    dataSet: TableData;
    /**
     * The scales for the chart
     *
     * @property scales
     */
    scales: ChartScales;
    /**
     * The chart Tooltip
     *
     * @property tooltip
     */
    tooltip: Tooltip;
    /**
     * The chart dimensions
     *
     * @property config
     */
    dimensions: Dimensions;
    /**
     * The transition time
     *
     * @property transitionTime
     */
    transitionTime: number;
    /**
     * Optional callback for clicking on the chart
     *
     * @property config
     */
    /**
     * Constructor used to set chart type
     *
     * @method constructor
     */
    constructor({ d3Svg, config, dataSet, scales, tooltip, dimensions, transitionTime, }: VisualParams);
    /**
     * Render the bars
     *
     * @method render
     */
    render: ({ reset, transition, }?: VisualRenderParams) => void;
}
