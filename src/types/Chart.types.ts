import { TableConfig, TableData } from './'

interface ChartParams {
  config?: TableConfig
  data?: TableData
  theme?: string
  container: HTMLDivElement | string
  label: string
}

interface Dimensions {
  left: number
  width: number
  top: number
  height: number
  innerWidth: number
  innerHeight: number
  resizeOffset: number
}

interface Padding {
  l: number
  r: number
  t: number
  b: number
}

type mapTypes = 'configs' | 'dataSets' | 'scales' | 'axes'

export { ChartParams, Dimensions, Padding, mapTypes }
