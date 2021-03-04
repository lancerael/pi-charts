import { scaleLinear, scaleBand } from 'd3-scale'
import { min, max } from 'd3-array'
import { AxisScale, Dimensions, Padding, TableData } from '../../types'

/**
 * Map of scale makers
 *
 * @property scaleMap
 */
const scaleMap: { [key: string]: () => AxisScale } = {
  band: () => scaleBand().padding(0.2),
  linear: () => scaleLinear(),
}

/**
 * The Scale is used to map data to usable scales for the chart and axes
 *
 * @class Scale
 * @constructor
 */
class Scale {
  /**
   * The type of scale, and key to the scale map
   *
   * @property scaleType
   */
  private readonly scaleType: string

  /**
   * The d3 scale
   * @property scaleType
   */
  public axisScale: AxisScale

  /**
   * The dataset used to create the scale
   * @property scaleType
   */
  private dataSet

  /**
   * The dimensions used to map the ranges of the scale
   * @property scaleType
   */
  private readonly dimensions
  private readonly padding

  constructor({
    scaleType = 'band',
    dataSet,
    dimensions,
    padding,
  }: {
    scaleType?: string
    dimensions: Dimensions
    padding: Padding
    dataSet?: TableData
  }) {
    this.scaleType = scaleType
    this.axisScale = scaleMap[scaleType]?.()
    this.dimensions = dimensions
    this.padding = padding
    this.dataSet = dataSet
    if (this.dataSet !== undefined) this.render()
  }

  /**
   * Define the dataSet for the scale
   *
   * @method setData
   * @param dataSet the table dataSet
   * @throws {Error} missing dataSet
   * @chainable
   */
  setData = (dataSet: TableData): Scale => {
    if (dataSet !== undefined) this.dataSet = dataSet
    else throw new Error('No data to set!')
    return this
  }

  /**
   * Set the ranges to render the scale
   *
   * @method render
   */
  render = (): void => {
    if (this.dataSet !== undefined) {
      if (this.scaleType === 'band') {
        this.axisScale.domain(this.dataSet.map((d) => d.label))
        this.axisScale.range([0, this.dimensions.innerWidth])
      } else if (this.scaleType === 'linear') {
        const minVal = min(this.dataSet, (d) => min(d.values))
        const maxVal = max(this.dataSet, (d) => max(d.values))
        this.axisScale.domain([minVal, maxVal])
        this.axisScale.range([
          this.dimensions.height - this.padding.b,
          this.padding.t,
        ])
      } else throw new Error('Unknown chart type!')
    } else throw new Error('No data to render scale!')
  }
}

export { Scale }
