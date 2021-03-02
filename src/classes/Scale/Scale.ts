import { scaleLinear, scaleBand, ScaleBand, ScaleLinear } from 'd3-scale'
import { min, max } from 'd3-array'
import { AxisScale, Dimensions, Padding, TableData } from '../../types'
import { truthy } from '../../helpers'

const scaleMap: { [key: string]: AxisScale } = {
  band: scaleBand().padding(0.2),
  linear: scaleLinear(),
}

class Scale {
  private scaleType
  public axisScale
  private dataSet
  private dimensions
  private padding

  constructor({
    scaleType = 'band',
    dataSet = [],
    dimensions,
    padding,
  }: {
    scaleType: string
    dimensions: Dimensions
    padding: Padding
    dataSet?: TableData
  }) {
    this.scaleType = scaleType
    this.axisScale = scaleMap[scaleType]
    this.dimensions = dimensions
    this.padding = padding
    this.dataSet = dataSet
    this.render()
  }

  setData = (dataSet: TableData) => {
    if (dataSet !== undefined) this.dataSet = dataSet
    else throw new Error(`No data to set!`)
  }

  render = (): void => {
    if (truthy(this.dataSet)) {
      if (this.scaleType === 'band') {
        this.axisScale.domain(this.dataSet.map((d) => d.label))
        this.axisScale.range([0, this.dimensions.innerWidth])
      } else if (this.scaleType === 'linear') {
        const minVal = min(this.dataSet, (d) => min(d.values))
        const maxVal = max(this.dataSet, (d) => max(d.values))
        this.axisScale.domain([minVal, maxVal])
        this.axisScale.range([
          this.dimensions.height - this.padding.b,
          this.padding.t,
        ])
      }
    } else throw new Error(`No data to render scale!`)
  }
}

export { Scale }
