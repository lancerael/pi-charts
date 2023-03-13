import { TableConfig, TableItem } from './'
interface ChartParams {
  config?: TableConfig
  data?: TableItem[]
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
type mapTypes = 'configs' | 'dataSets' | 'scales' | 'axes'
export { ChartParams, Dimensions, Padding, mapTypes }
