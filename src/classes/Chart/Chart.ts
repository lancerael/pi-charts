import { select } from 'd3-selection'
import ResizeObserver from 'resize-observer-polyfill'
import { Tooltip, Axis, Scale } from '../'
import {
  addColorsToConfig,
  throttle,
  transformDataKeys,
  truthy,
} from '../../helpers'
import { publishTheme } from '../../theming'
import {
  TableConfig,
  TableData,
  ChartParams,
  Dimensions,
  Padding,
  D3Div,
  D3Svg,
  ChartScales,
} from '../../types'
import { style } from './Chart.style'

/**
 * Used to initialise the canvas that will contain all the chart's SVG content
 *
 * @class Chart
 * @constructor
 */
class Chart {
  /**
   * Default time for d3 transitions on the chart
   *
   * @property transitionTime
   */
  private readonly transitionTime = 500

  /**
   * DOM reference to container element that wraps SVG
   *
   * @property container
   */
  private readonly container: HTMLDivElement

  /**
   * SVG d3 object for d3 operations on the chart
   *
   * @property svgSelection
   */
  private readonly d3Svg: D3Svg

  /**
   * d3 reference to chart title element
   *
   * @property title
   */
  private readonly title: D3Div

  /**
   * The current calculated diensions of the chart
   *
   * @property dimensions
   */
  private dimensions: Dimensions = {
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    resizeOffset: 0,
  }

  /**
   * The width before any browser resize
   *
   * @property initialWidth
   */
  protected initialWidth = 0

  /**
   * The padding for the chart within the container
   *
   * @property padding
   */
  private readonly padding: Padding = { l: 45, r: 5, t: 25, b: 85 }

  /**
   * The chart's configs
   *
   * @property configs
   */
  readonly configs: Map<string, TableConfig> = new Map()

  /**
   * The chart's data sets
   *
   * @property dataSets
   */
  readonly dataSets: Map<string, TableData> = new Map()

  /**
   * The chart's d3 scales
   *
   * @property scales
   */
  readonly scales: Map<string, ChartScales> = new Map()

  /**
   * The chart's d3 axes
   *
   * @property axes
   */
  readonly axes: Map<string, Axis> = new Map()

  /**
   * The chart's label for display
   *
   * @property label
   */
  private readonly label: string

  /**
   * The chart's resize offset for use later
   *
   * @property resizeOffset
   */
  private readonly resizeOffset = 0

  /**
   * The chart's tooltip object.
   *
   * @property tooltip
   */
  private readonly tooltip: Tooltip

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
  constructor({
    label,
    container,
    config,
    data,
    theme = 'light',
  }: ChartParams) {
    this.label = label
    this.container = this.setContainer(
      typeof container === 'string'
        ? document.querySelector(container)
        : container
    )
    this.title = select(this.container).append('div').attr('class', 'pic-title')
    this.d3Svg = select(this.container)
      .append('svg')
      .attr('class', 'pic-svg')
      .attr('width', '100%')
      .attr('height', '100%')
    this.resizeWatcher.observe(this.container)
    this.tooltip = new Tooltip(this.container)
    this.draw()
    this.initialWidth = this.dimensions.width
    if (config !== undefined) this.setConfig('default', config)
    if (data !== undefined) this.setData('default', data, 'default')
    publishTheme(theme)
    style()
    /* DEV START */
    // this.addScale('default', { x: 'band', y: 'linear' })
    // const scales = this.scales.get('default')
    // if (scales !== undefined) {
    //   this.axes.set(
    //     'default',
    //     new Axis({
    //       d3Svg: this.d3Svg,
    //       tooltip: this.tooltip,
    //       dimensions: this.dimensions,
    //       padding: this.padding,
    //       truncate: 10,
    //       axisLabels: this.configs.get('default')?.axisLabels ?? ['', ''],
    //       scales,
    //     })
    //   )
    // }
    // select(this.container)
    //   .on('mousemove', (e, d) =>
    //     this.tooltip.ping(['something', 'name', '123'], e)
    //   )
    //   .on('mouseout', (e, d) => this.tooltip.hide())
    /* DEV END */
  }

  /**
   * Sets up the container object and SVG.
   *
   * @method setContainer
   * @param container Required DOM element
   * @throws {Error} invalid DOM element
   */
  private readonly setContainer = (
    container: HTMLDivElement | null
  ): HTMLDivElement => {
    if (container !== null && truthy(container?.nodeName)) {
      return container
    } else {
      throw new Error('No valid DOM element or selector provided for chart.')
    }
  }

  /**
   * Adds a set of config options for the chart.
   *
   * @method setConfig
   *
   * @param configName key for the hash table
   * @param config JSON configuration object
   * @throws {Error} missing configuration
   */
  public setConfig = (configName: string, config: TableConfig): void => {
    if (Array.isArray(config?.values)) {
      config.values = addColorsToConfig(config.values)
      this.configs.set(configName, config)
      this.renderChart()
    } else {
      throw new Error('No valid configuration provided for chart.')
    }
  }

  /**
   * Removes a set of config options for the chart.
   *
   * @method deleteConfig
   *
   * @param configName key for the hash table
   * @throws {Error} missing configuration
   */
  public deleteConfig = (configName: string): void => {
    if (truthy(this.configs.get(configName))) {
      this.configs.delete(configName)
      this.renderChart()
    } else {
      throw new Error('Attempted to delete a config that does not exist.')
    }
  }

  /**
   * Add a data set for the chart.
   *
   * @method setData
   * @param dataName name for the data set
   * @param data transform mapped data
   * @throws {Error} missing data
   */
  public setData = (
    dataName: string,
    data: TableData,
    configName: string
  ): void => {
    if (Array.isArray(data)) {
      const config = this.configs.get(configName)
      const newData = Array.isArray(config?.values)
        ? transformDataKeys(config, data)
        : data
      this.dataSets.set(dataName, newData)
      this.renderChart()
    } else {
      throw new Error('No valid data provided for chart.')
    }
  }

  /**
   * Removes a dataset from the chart.
   *
   * @method deleteData
   *
   * @param deleteData key for the hash table
   * @throws {Error} missing configuration
   */
  public deleteData = (dataName: string): void => {
    if (truthy(this.dataSets.get(dataName))) {
      this.dataSets.delete(dataName)
      this.renderChart()
    } else {
      throw new Error('Attempted to delete a data set that does not exist.')
    }
  }

  /**
   * Add a scale set for the chart.
   *
   * @method addScale
   * @param scaleName array of JSON objects
   * @param scaleTypes transform mapped data
   * @throws {Error} missing data
   */
  public addScale = (
    scaleName: string,
    scaleTypes: { x: string; y: string }
  ): void => {
    this.scales.set(
      scaleName,
      Object.entries(scaleTypes).reduce(
        (chartScales, [direction, scaleType]: [string, string]) => ({
          ...chartScales,
          [direction]: new Scale({
            scaleType,
            dataSet: this.dataSets.get('default'),
            dimensions: this.dimensions,
            padding: this.padding,
          }),
        }),
        {}
      ) as ChartScales
    )
    this.draw()
  }

  /**
   * Sets the local chart dimensions based on the size of the container.
   *
   * @method setDimensions
   */
  private readonly updateDimensions = (): void => {
    const { left, width, top, height } = this.container.getBoundingClientRect()
    const { l, r, t, b } = this.padding
    this.dimensions.left = left
    this.dimensions.width = width
    this.dimensions.top = top
    this.dimensions.height = height
    this.dimensions.innerWidth = width - l - r
    this.dimensions.innerHeight = height - t - b
    this.dimensions.resizeOffset = width - this.initialWidth
  }

  /**
   * Render the chart
   *
   * @method renderChart
   */
  private readonly renderChart = (): void => {
    if (this.title !== undefined && truthy(this.label)) {
      this.title.text(this.label)
      // to be continued...
    } else {
      throw new Error('Unable to render the chart.')
    }
  }

  /**
   * Redraw the chart
   *
   * @method draw
   */
  private readonly draw = throttle((): void => {
    this.updateDimensions()
    this.renderChart()
    this.scales.forEach((chartScales: ChartScales) =>
      Object.values(chartScales).forEach((scale) => scale.render())
    )
    // this.axes.forEach((axis: Axis) => axis.render())
  })

  /**
   * Watcher for the resize event
   *
   */
  private readonly resizeWatcher = new ResizeObserver(this.draw)
}

export { Chart }
