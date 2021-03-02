import { Selection } from 'd3-selection'

type Timeout = ReturnType<typeof setTimeout>

type D3Div = Selection<HTMLDivElement, unknown, any, undefined>
type D3Svg = Selection<SVGSVGElement, unknown, null, undefined>

export { Timeout, D3Div, D3Svg }
