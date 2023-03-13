import { Tooltip } from '../components'
import { ChartScales, Dimensions, D3Svg } from './'
interface AxisParams {
  d3Svg: D3Svg
  tooltip: Tooltip
  dimensions: Dimensions
  truncate?: number
  axisLabels?: [string, string]
  scales: ChartScales
}
type ScaleType = 'band' | 'linear'
export { AxisParams, ScaleType }
