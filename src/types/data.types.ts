import { RGBColor } from 'd3-color'

interface ValueConfig {
  name: string
  color?: string
  key?: string
  rgbColor?: RGBColor | false
}

interface TableConfig {
  values: ValueConfig[]
  axisLabels?: [string, string]
  axisKeys?: string[]
  trim?: boolean
}

interface TableItem {
  values: number[]
  label: string
}

type TableData = TableItem[]

interface ChartTable {
  label: string
  config: TableConfig
  data: TableData
}

export { ValueConfig, TableConfig, TableItem, TableData, ChartTable }