import { easeLinear } from 'd3-ease'
import { ScaleBand, ScaleLinear } from 'd3-scale'
import { BaseType, select } from 'd3-selection'
import 'd3-transition'
import {
  ChartScales,
  Dimensions,
  TableConfig,
  TableData,
  TableItem,
  VisualParams,
} from '../../types'
import { Tooltip } from '../'
import { darkerColor } from '../../helpers'

/**
 * Create BarCharts from the supplied data, based on the JSON config.
 *
 * @class BarChart
 * @constructor
 */
class Bars {
  /**
   * The local collection of bars
   *
   * @property bars
   * @type {Array}
   */
  bars: any[] = []

  chartGroup: any

  config: TableConfig

  data: TableData

  scales: ChartScales

  tooltip: Tooltip

  dimensions: Dimensions

  clickCallback = (e: MouseEvent, d: TableItem): void => console.log('clicked')

  /**
   * Constructor used to set chart type
   *
   * @method constructor
   */
  constructor({
    d3Svg,
    config,
    data,
    scales,
    tooltip,
    dimensions,
  }: VisualParams) {
    this.config = config
    this.data = data
    this.scales = scales
    this.tooltip = tooltip
    this.dimensions = dimensions
    this.chartGroup = d3Svg
      .append('g')
      .attr('transform', `translate(${dimensions.padding.l}, 0)`)
    this.render()
  }

  /**
   * Render the bars
   *
   * @method renderChart
   */
  render(reset = false): void {
    if (this.scales.x === undefined || this.scales.y === undefined) return
    const { values } = this.config
    const { innerHeight, padding } = this.dimensions
    const scaleX = this.scales.x.axisScale as ScaleBand<string>
    const scaleY = this.scales.y.axisScale as ScaleLinear<number, number>
    const barWidth = scaleX.bandwidth() / values.length
    const barType = 'side'
    const transitionTime = 1000

    // Reset bars data and clear graph
    if (reset) {
      this.bars.forEach((bar, i) => {
        bar = this.chartGroup.selectAll(`rect.pic-bars-${i}`).data([])
        bar.exit().remove()
        bar = undefined
      })
      this.bars = []
    }

    // Iterate through config value keys
    values.forEach(({ rgbColor, name }, i) => {
      const barOffset = barType === 'side' ? barWidth * i : 0
      // Add bars for each value
      if (this.bars[i] === undefined) {
        // Bind bars data
        this.bars[i] = this.chartGroup
          .selectAll(`rect.pic-bars-${i}`)
          .data(this.data)
        // Add new rect elements and set base attributes
        this.bars[i]
          .enter()
          .append('rect')
          .on('mousemove', (e: MouseEvent, d: TableItem) => {
            this.tooltip.ping([d.label, name, String(d.values[i])], e)
          })
          .on('mouseover', (e: MouseEvent, d: TableItem) => {
            if (typeof rgbColor === 'object') {
              select(e.target as BaseType).attr(
                'fill',
                darkerColor(rgbColor).formatHex()
              )
            }
          })
          .on('mousedown', (e: MouseEvent, d: TableItem) => {
            if (typeof this.clickCallback === 'function') {
              this.clickCallback(e, d)
            }
          })
          .on('mouseout', (e: MouseEvent, d: TableItem) => {
            this.tooltip.hide()
            if (typeof rgbColor === 'object') {
              select(e.target as BaseType).attr('fill', rgbColor.formatHex())
            }
          })
          .attr('class', `pic-bars pic-bars-${i}`)
          .attr('fill', rgbColor)
          .attr('y', innerHeight + padding.t)
          .attr('height', 0)
      }

      this.chartGroup
        .selectAll(`rect.pic-bars-${i}`)
        .data(this.data)
        .attr('x', (d: TableItem) => Number(scaleX(d.label)) + barOffset)
        .attr('width', barWidth)
        .transition()
        .ease(easeLinear)
        .duration(transitionTime)
        .attr('y', (d: TableItem) => {
          let value = d.values[i]
          value = value < 0 ? Math.abs(value) : 0
          return scaleY(d.values[i] + value)
        })
        .attr('height', (d: TableItem) => {
          const iModifier = 0 // this.iMinValue < 0 ? Math.abs(this.iMinValue) : 0
          return (
            innerHeight - scaleY(Math.abs(d.values[i]) - iModifier) + padding.t
          )
        })
    })
  }
}

export { Bars }
