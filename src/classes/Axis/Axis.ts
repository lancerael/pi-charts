import { axisBottom, axisLeft, AxisScale } from 'd3-axis'
import { NumberValue } from 'd3-scale'
import { Dimensions, Padding, D3Svg, ChartScales } from '../../types'
import { truncateString, truthy } from '../../helpers'
import { Tooltip } from '../Tooltip'
import { AxisParams } from '../../types/Axis.types'
import { style } from './Axis.style'

/**
 * The Axis object is used to instantiate x and y axes, as well as labels
 *
 * @class Axis
 * @constructor
 */
class Axis {
  /**
   * SVG d3 object for d3 operations on the chart
   *
   * @property svgSelection
   */
  private readonly d3Svg: D3Svg

  /**
   * Amount to truncate axis labels to
   *
   * @property truncate
   */
  private readonly truncate: number

  /**
   * Collection of axis labels
   *
   * @property axisLabels
   */
  private readonly axisLabels: [string, string]

  /**
   * Scales for the axes
   *
   * @property scales
   */
  private readonly scales: ChartScales

  /**
   * Chart's tooltip object
   *
   * @property tooltip
   * @type {Object}
   */
  private readonly tooltip: Tooltip

  /**
   * The current calculated diensions of the chart
   *
   * @property dimensions
   */
  private dimensions: Dimensions

  /**
   * The padding for the chart within the container
   *
   * @property padding
   */
  private readonly padding: Padding

  /**
   * Constructor function which sets up the local object.
   *
   * @method constructor
   * @param d3Svg containing d3 SVG
   * @param tooltip tooltip div
   * @param dimensions chart dimensions
   * @param padding chart padding
   * @param truncate text truncate length
   * @param axisLabels chart axis labels
   * @param scales chart axis scales
   * @throws {Error} invalid parameters
   */
  constructor({
    d3Svg,
    tooltip,
    dimensions,
    padding,
    truncate = 2,
    axisLabels,
    scales,
  }: AxisParams) {
    if (truthy(d3Svg)) {
      this.d3Svg = d3Svg
      this.tooltip = tooltip
      this.dimensions = dimensions
      this.padding = padding
      this.truncate = truncate
      this.axisLabels = axisLabels ?? ['', '']
      this.scales = scales
      this.render()
      style()
    } else {
      throw new Error('Incorrect parameters provided to Axis constructor.')
    }
  }

  /**
   * Master render to call all rendering methods
   *
   * @method render
   * @chainable
   */
  render(dimensions?: Dimensions): Axis {
    if (dimensions !== undefined) this.dimensions = dimensions
    this.renderAxisX()
    this.renderAxisY()
    this.renderLabels()
    return this
  }

  /**
   * Render only the x axis
   *
   * @method renderAxisX
   */
  renderAxisX(): void {
    this.d3Svg.selectAll('g.pic-x-axis').remove()
    if (this.scales.x !== undefined) {
      this.d3Svg
        .append('g')
        .attr('class', 'pic-x-axis')
        .call(axisBottom(this.scales.x.axisScale))
        .attr(
          'transform',
          `translate(${this.padding.l},${
            this.dimensions.height - this.padding.b
          })`
        )
        .selectAll('text')
        .attr('x', -5)
        .attr('y', 6)
        .attr('transform', 'rotate(310)')
        .attr('class', 'pic-x-labels')
        .text((d) => truncateString(d as string, this.truncate))
        .style('text-anchor', 'end')
        .on('mousemove', (e, d) => {
          if (truthy(this.tooltip) && (d as string).length > this.truncate) {
            this.tooltip.ping(`<strong>${d as string}</strong>`, e)
          }
        })
        .on('mouseout', (e, d) => this.tooltip.hide())
    }
  }

  /**
   * Render only the y axis
   *
   * @method renderAxisY
   */
  renderAxisY(): void {
    this.d3Svg.selectAll('g.pic-y-axis').remove()
    if (this.scales.y !== undefined) {
      this.d3Svg
        .append('g')
        .attr('class', 'pic-y-axis')
        .call(axisLeft(this.scales.y.axisScale))
        .attr('transform', `translate(${this.padding.l},0)`)
        .selectAll('.pic-y-axis .tick line')
        .attr('class', 'pic-line')
        .attr('x2', () => this.dimensions.innerWidth)
    }
  }

  /**
   * Render only the labels
   *
   * @method renderLabels
   */
  renderLabels(): void {
    this.d3Svg.selectAll('text.pic-labels').remove()
    if (truthy(this.axisLabels[0])) {
      this.d3Svg
        .append('text')
        .attr('class', 'pic-labels pic-labels-x')
        .attr('x', this.dimensions.height / -2 + this.padding.b / 2)
        .attr('y', 20)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text(this.axisLabels[0])
    }
    if (truthy(this.axisLabels[1])) {
      this.d3Svg
        .append('text')
        .attr('class', 'pic-labels pic-labels-y')
        .attr(
          'x',
          (this.dimensions.width + this.padding.l + this.padding.r) / 2
        )
        .attr('y', this.dimensions.height - this.padding.b / 3)
        .attr('text-anchor', 'middle')
        .text(this.axisLabels[1])
    }
  }
}

export { Axis }
