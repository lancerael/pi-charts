import { scaleLinear, scaleBand } from 'd3-scale'
import { AxisScale, Dimensions, TableData } from '../../types'

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
export class Scale {
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

  constructor({
    scaleType = 'band',
    dataSet,
    dimensions,
  }: {
    scaleType?: string
    dimensions: Dimensions
    dataSet?: TableData
  }) {
    this.scaleType = scaleType
    this.axisScale = scaleMap[scaleType]?.()
    this.dimensions = dimensions
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
  public setData = (dataSet: TableData): Scale => {
    if (dataSet === undefined) throw new Error('No data to set!')
    this.dataSet = dataSet
    return this
  }

  /**
   * Set the ranges to render the scale
   *
   * @method render
   */
  public render = (): void => {
    const { padding, height, innerWidth } = this.dimensions
    if (this.dataSet === undefined) throw new Error('No data to render scale!')
    const scaleArrays = {
      band: [this.dataSet.data.map((d) => d.label), [0, innerWidth]],
      linear: [
        [this.dataSet.minValue, this.dataSet.maxValue],
        [height - padding.b, padding.t],
      ],
    }[this.scaleType]
    if (scaleArrays === undefined) throw new Error('Unknown chart type!')
    this.axisScale.domain(scaleArrays[0])
    this.axisScale.range(scaleArrays[1])
  }
}
