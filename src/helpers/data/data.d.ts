import { TableConfig, TableItem, ChartTable } from '../../types'
/**
 * Returns a sample selection from any array
 *
 * @method sliceSampleData
 *
 * @param dataSet the complete data set
 * @param minLength max length of sample
 * @param maxLength max length of sample
 * @return sliced section of data
 */
declare const sliceSampleData: (
  dataSet: any[],
  minLength?: number,
  maxLength?: number
) => any[]
/**
 * Returns random data and config for demo purposes.
 *
 * @method randomData
 *
 * @param length the length of the data set - by total number of items
 * @param size each piece of data - by data points per item
 * @param rangeLow the lower range for the random data values
 * @param rangeHigh the upper range for the random data values
 * @return JSON compatible data structure for entire table
 */
declare const randomData: (
  length?: number,
  size?: number,
  rangeLow?: number,
  rangeHigh?: number
) => ChartTable
/**
 * Returns empty table data and config for demo purposes.
 *
 * @method emptyTable
 *
 * @return Empty table config and data structure
 */
declare const emptyTable: () => ChartTable
/**
 * Maps custom data keys into standard structure.
 *
 * @method transformDataKeys
 *
 * @param config the JSON style config object
 * @param data the chart data to be transformed
 * @return Parsed table data structure
 */
declare const transformDataKeys: (
  config: TableConfig | undefined,
  data: any[]
) => TableItem[]
export { sliceSampleData, randomData, emptyTable, transformDataKeys }
