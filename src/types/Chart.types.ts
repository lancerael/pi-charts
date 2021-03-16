import { Tooltip } from '../components'
import { Bars } from '../components/Bars'
import { TableConfig, TableData } from './'
import { D3Svg } from './general.types'
import { ChartScales } from './Scale.types'

interface ChartParams {
  config?: TableConfig
  data?: TableData
  theme?: string
  container: HTMLDivElement | string
  label: string
}

interface Padding {
  l: number
  r: number
  t: number
  b: number
}

interface Dimensions {
  padding: Padding
  left: number
  width: number
  top: number
  height: number
  innerWidth: number
  innerHeight: number
  resizeOffset: number
}

type Visual = Bars

interface VisualParams {
  d3Svg: D3Svg
  config: TableConfig
  data: TableData
  scales: ChartScales
  tooltip: Tooltip
  dimensions: Dimensions
}

type mapTypes = 'configs' | 'dataSets' | 'scales' | 'axes'

export { ChartParams, Dimensions, Padding, mapTypes, VisualParams, Visual }
