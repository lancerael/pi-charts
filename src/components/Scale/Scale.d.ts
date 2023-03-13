import { AxisScale, Dimensions, TableData, ScaleType } from '../../types'
/**
 * The Scale is used to map data to usable scales for the chart and axes
 *
 * @class Scale
 * @constructor
 */
export declare class Scale {
  /**
   * The type of scale, and key to the scale map
   *
   * @property scaleType
   */
  private readonly scaleType
  /**
   * The d3 scale
   * @property scaleType
   */
  axisScale: AxisScale
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
    scaleType,
    dataSet,
    dimensions,
  }: {
    scaleType?: ScaleType
    dimensions: Dimensions
    dataSet?: TableData
  })
  /**
   * Define the dataSet for the scale
   *
   * @method setData
   * @param dataSet the table dataSet
   * @throws {Error} missing dataSet
   * @chainable
   */
  setData: (dataSet: TableData) => Scale
  /**
   * Set the ranges to render the scale
   *
   * @method render
   */
  render: () => void
}
