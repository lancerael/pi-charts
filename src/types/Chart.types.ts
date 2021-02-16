import { TableConfig, TableData } from './'

interface ChartParams {
  config?: TableConfig
  data?: TableData
  containerSelector?: string
  containerElement?: HTMLElement
  label: string
}

export { ChartParams }
