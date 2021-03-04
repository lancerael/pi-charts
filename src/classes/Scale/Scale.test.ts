import { Scale } from './'
import { randomData } from '../../helpers'

const { data: dataSet } = randomData()

const dimensions = {
  left: 0,
  width: 0,
  top: 0,
  height: 0,
  innerWidth: 0,
  innerHeight: 0,
  resizeOffset: 0,
}

const padding = { l: 45, r: 5, t: 25, b: 85 }

describe('Scale', () => {
  it('should create a band Scale initialised with a dataset', () => {
    const bandScale = new Scale({
      scaleType: 'band',
      dataSet,
      dimensions,
      padding,
    })
    expect(bandScale.axisScale).toBeDefined()
  })

  it('should create a default band Scale with a dataset added later via render', () => {
    const bandScale = new Scale({
      dimensions,
      padding,
    })
    expect(bandScale.axisScale.domain().length).toBe(0)
    bandScale.setData(dataSet).render()
    expect(bandScale.axisScale.domain().length).toBeGreaterThan(0)
  })

  it('should create a linear Scale initialised with a dataset', () => {
    const linearScale = new Scale({
      scaleType: 'linear',
      dataSet,
      dimensions,
      padding,
    })
    expect(linearScale.axisScale).toBeDefined()
  })

  it('should throw correct errors', () => {
    const bananaScale = new Scale({
      scaleType: 'banana',
      dimensions,
      padding,
    })
    expect(() => bananaScale.render()).toThrow(
      new Error('No data to render scale!')
    )
    // @ts-expect-error - forcing incorrect usage for test
    expect(() => bananaScale.setData()).toThrow(new Error('No data to set!'))
    bananaScale.setData(dataSet)
    expect(() => bananaScale.render()).toThrow(new Error('Unknown chart type!'))
  })
})
