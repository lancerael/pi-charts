import { ScaleBand, ScaleLinear } from 'd3-scale'
import { Scale } from '../classes'

type AxisScale = ScaleLinear<any, any, any> | ScaleBand<any>

type ChartScales = {
  x?: Scale
  y?: Scale
}

export { AxisScale, ChartScales }