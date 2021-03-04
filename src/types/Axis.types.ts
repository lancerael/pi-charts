import { Tooltip } from '../classes'
import { ChartScales, Dimensions, Padding, D3Svg } from './'

interface AxisParams {
  d3Svg: D3Svg
  tooltip: Tooltip
  dimensions: Dimensions
  padding: Padding
  truncate?: number
  axisLabels?: [string, string]
  scales: ChartScales
}

export { AxisParams }
