import { RGBColor } from 'd3-color';
interface ValueConfig {
    name: string;
    color?: string;
    key?: string;
    rgbColor?: RGBColor | false;
    labelWidth?: number;
}
interface TableConfig {
    values: ValueConfig[];
    axisLabels?: [string, string];
    axisKeys?: string[];
    trim?: boolean;
}
interface TableItem {
    values: number[];
    label: string;
    color?: string;
}
interface TableData {
    data: TableItem[];
    minValue: number;
    maxValue: number;
}
interface ChartTable {
    label: string;
    config: TableConfig;
    data: TableItem[];
}
export type { ValueConfig, TableConfig, TableItem, TableData, ChartTable };
