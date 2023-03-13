import { Axis, Key } from '../';
import { TableConfig, TableData, ChartParams, ChartScales, mapTypes, Visual, TableItem } from '../../types';
/**
 * Used to initialise the canvas that will contain all the chart's SVG content
 *
 * @class Chart
 * @constructor
 */
export declare class Chart {
    /**
     * Default time for d3 transitions on the chart
     *
     * @property transitionTime
     */
    /**
     * DOM reference to container element that wraps SVG
     *
     * @property container
     */
    private readonly container;
    /**
     * SVG d3 object for d3 operations on the chart
     *
     * @property svgSelection
     */
    private readonly d3Svg;
    /**
     * d3 reference to chart title element
     *
     * @property title
     */
    private readonly title;
    /**
     * The padding for the chart within the container
     *
     * @property padding
     */
    private readonly padding;
    /**
     * The current calculated diensions of the chart
     *
     * @property dimensions
     */
    private dimensions;
    /**
     * The width before any browser resize
     *
     * @property initialWidth
     */
    protected initialWidth: number;
    /**
     * The chart's configs
     *
     * @property configs
     */
    readonly configs: Map<string, TableConfig>;
    /**
     * The chart's data sets
     *
     * @property dataSets
     */
    readonly dataSets: Map<string, TableData>;
    /**
     * The chart's d3 scales
     *
     * @property scales
     */
    readonly scales: Map<string, ChartScales>;
    /**
     * The chart's d3 axes
     *
     * @property axes
     */
    readonly axes: Map<string, Axis>;
    /**
     * The chart's keys
     *
     * @property keys
     */
    readonly keys: Map<string, Key>;
    /**
     * The chart's visuals
     *
     * @property visuals
     */
    readonly visuals: Map<string, Visual>;
    /**
     * The chart's label for display
     *
     * @property label
     */
    private readonly label;
    /**
     * The chart's resize offset for use later
     *
     * @property resizeOffset
     */
    /**
     * The chart's tooltip object.
     *
     * @property tooltip
     */
    private readonly tooltip;
    /**
     * Constructor function that sets up the local object.
     *
     * @method constructor
     * @param label label for chart
     * @param config configuration object
     * @param data the data to be displayed
     * @param containerElement optionally DOM node in place of ID
     * @param containerSelector selector to select DOM object
     * @param theme the selected theme for the chart
     */
    constructor({ label, container, config, data, theme, }: ChartParams);
    /**
     * Sets up the container object and SVG.
     *
     * @method setContainer
     * @param container Required DOM element
     * @throws {Error} invalid DOM element
     */
    private readonly setContainer;
    /**
     * Adds a set of config options for the chart.
     *
     * @method setConfig
     * @chainable
     *
     * @param config JSON configuration object
     * @param configName key for the hash table
     * @throws {Error} missing configuration
     */
    setConfig: (config: TableConfig, configName?: string) => Chart;
    /**
     * Add a data set for the chart.
     *
     * @method setData
     * @chainable
     *
     * @param dataName name for the data set
     * @param data data to set
     * @param configName name for the config
     * @throws {Error} missing data
     */
    setData: (data: TableItem[], dataName?: string, configName?: string, trim?: boolean) => Chart;
    /**
     * Add a scale set for the chart.
     *
     * @method addScale
     * @chainable
     *
     * @param scaleName the name for the scale
     * @param scaleTypes the types for the scale
     * @param dataName the name of the dataset
     * @throws {Error} missing data
     */
    addScale: (scaleTypes?: {
        x: string;
        y: string;
    }, scaleName?: string, dataName?: string) => Chart;
    /**
     * Adds a set of config options for the chart.
     *
     * @method addAxis
     * @chainable
     *
     * @param axisName key for the hash table
     * @param scaleName the name for the associated d3 scale
     * @param configName the name for the associated JSON configuration object
     * @throws {Error} missing configuration
     */
    addAxis: (axisName?: string, scaleName?: string, configName?: string) => Chart;
    /**
     * Adds a set of keys to the chart.
     *
     * @method addKey
     * @chainable
     *
     * @param keyName name for the hash table
     * @param configName the name for the associated JSON configuration object
     * @throws {Error} missing configuration
     */
    addKey: (keyName?: string, configName?: string) => Chart;
    /**
     * Adds a set of keys to the chart.
     *
     * @method addVisual
     * @chainable
     *
     * @param keyName name for the hash table
     * @param configName the name for the associated JSON configuration object
     * @throws {Error} missing configuration
     */
    addVisual: (keyName?: string, configName?: string, dataName?: string, scalesName?: string, type?: string, transitionTime?: number) => Chart;
    /**
     * Removes an item from one of the maps.
     *
     * @method deleteMapItem
     * @chainable
     *
     * @param mapName the name of the map to target
     * @param mapItemName key for the map item to be deleted
     * @throws {Error} item does not exist in map
     */
    deleteMapItem: (mapName: mapTypes, mapItemName: string) => Chart;
    /**
     * Adds default features to the chart
     */
    addDefaults: () => Chart;
    /**
     * Sets the local chart dimensions based on the size of the container.
     *
     * @method setDimensions
     */
    private readonly updateDimensions;
    /**
     * Render the chart
     *
     * @method renderChart
     */
    private readonly renderChart;
    /**
     * Draw the chart
     *
     * @method draw
     */
    private readonly draw;
    /**
     * Redraw the chart
     *
     * @method redraw
     */
    private readonly redraw;
    /**
     * Watcher for the resize event
     *
     */
    private readonly resizeWatcher;
}
