import { select, Selection } from 'd3-selection'
import ResizeObserver from 'resize-observer-polyfill'
import { Tooltip } from '../Tooltip'
import { addColorsToConfig, transformDataKeys, truthy } from '../../helpers'
import { setTheme } from '../../theming'
import { TableConfig, TableData, ChartParams } from '../../types'
import { style } from './Chart.style'

/**
 * Used to initialise the canvas that will contain all the chart's SVG content
 *
 * @class Chart
 * @constructor
 */
class Chart {
  /**
   * SVG DOM object for displaying the chart
   *
   * @property svgElement
   */
  private readonly svgElement: SVGGraphicsElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  )

  /**
   * SVG d3 object for d3 operations on the chart
   *
   * @property svgSelection
   */
  private readonly svgSelection: Selection<
    SVGGraphicsElement,
    any,
    any,
    any
  > = select(this.svgElement)

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
  private container: HTMLElement = document.createElement('div')

  /**
   * d3 reference to chart title element
   *
   * @property d3Title
   */
  private title: Selection<HTMLDivElement, any, any, any> | undefined

  /**
   * The current calculated width of the chart
   *
   * @property width
   */
  private width = 0

  /**
   * The current calculated height of the chart
   *
   * @property height
   */
  private height = 0

  /**
   * The current calculated inner width of the chart
   *
   * @property innerWidth
   */
  private innerWidth = 0

  /**
   * The current calculated inner height of the chart
   *
   * @property innerHeight
   */
  private innerHeight = 0

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
  private readonly padding = { l: 5, r: 5, t: 5, b: 5 }

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
  private resizeOffset = 0

  /**
   * The chart's tooltip object.
   *
   * @property tooltip
   */
  private tooltip: Tooltip | undefined

  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param config JSON configuration object
   * @param data the data to be displayed
   * @param containerElement optionally DOM node in place of ID
   * @param containerSelector selector to select DOM object
   */
  constructor({
    label,
    containerElement,
    containerSelector = '',
    config,
    data,
    theme = 'light',
  }: ChartParams) {
    this.label = label
    this.init(containerElement ?? document.querySelector(containerSelector))
    this.draw()
    this.initialWidth = this.width
    if (config !== undefined) this.setConfig('default', config)
    if (data !== undefined) this.setData('default', data, 'default')
    setTheme(theme)
    style()
    /* FOR DEVELOPMENT OF TOOLTIP ONLY */
    select(this.container)
      .on('mousemove', (e, d) => {
        // @ts-expect-error - wip
        this.tooltip.ping(['something', 'name', '123'], e)
      })
      .on('mouseout', (e, d) => {
        // @ts-expect-error - wip
        this.tooltip.hide()
      })
  }

  /**
   * Sets up the container object and SVG.
   *
   * @method init
   * @param container Required DOM element
   * @throws {Error} invalid DOM element
   */
  private init(container: HTMLElement | null): void {
    if (container !== null && truthy(container?.nodeName)) {
      this.container = container
      this.title = select(this.container)
        .append('div')
        .attr('class', 'pic-title')
      this.svgSelection
        .attr('class', 'pic-svg')
        .attr('width', '100%')
        .attr('height', '100%')
      this.container.appendChild(this.svgElement)
      this.tooltip = new Tooltip(this.container)
      this.resizeWatcher.observe(this.container)
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
  public setConfig(configName: string, config: TableConfig): void {
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
  public deleteConfig(configName: string): void {
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
   * @param dataName array of JSON objects
   * @param data transform mapped data
   * @throws {Error} missing data
   */
  public setData(dataName: string, data: TableData, configName: string): void {
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
  public deleteData(dataName: string): void {
    if (truthy(this.dataSets.get(dataName))) {
      this.dataSets.delete(dataName)
      this.renderChart()
    } else {
      throw new Error('Attempted to delete a data set that does not exist.')
    }
  }

  /**
   * Sets the local chart dimensions based on the size of the container.
   *
   * @method setDimensions
   */
  private updateDimensions(): void {
    this.width = this.container?.clientWidth
    this.height = this.container?.clientHeight
    this.innerWidth = this.width - this.padding.l - this.padding.r
    this.innerHeight = this.height - this.padding.t - this.padding.b
    this.resizeOffset = this.width - this.initialWidth
  }

  /**
   * Render the chart
   *
   * @method renderChart
   */
  private renderChart(): void {
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
  private readonly draw = (): void => {
    this.updateDimensions()
    this.renderChart()
    // console.log('resizeOffset', this.resizeOffset)
  }

  /**
   * Watcher for the resize event
   *
   */
  private readonly resizeWatcher = new ResizeObserver(this.draw)
}

export { Chart }
