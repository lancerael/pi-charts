import { ScaleBand, ScaleLinear } from 'd3-scale';
import { Scale } from '../components';
type AxisScale = ScaleLinear<any, any, any> | ScaleBand<any>;
interface ChartScales {
    x?: Scale;
    y?: Scale;
}
export type { AxisScale, ChartScales };
