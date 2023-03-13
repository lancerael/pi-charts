import { Tooltip } from '../components';
import { Bars } from '../components/Bars';
import { Dimensions, TableConfig, TableData, TableItem } from './';
import { D3Svg } from './general.types';
import { ChartScales } from './Scale.types';
type Visual = Bars;
interface VisualParams {
    d3Svg: D3Svg;
    config?: TableConfig;
    dataSet?: TableData;
    scales?: ChartScales;
    tooltip: Tooltip;
    dimensions: Dimensions;
    transitionTime: number;
    clickCallback?: (e: MouseEvent, d: TableItem) => void;
}
interface VisualRenderParams {
    reset?: boolean;
    transition?: boolean;
}
export type { Visual, VisualParams, VisualRenderParams };
