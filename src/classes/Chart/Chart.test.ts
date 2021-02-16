import { Chart } from './Chart'
import jsdom from 'jsdom'
import fs from 'fs'
import { randomData } from '../../helpers'
import { ChartParams } from '../../types'

const index = fs.readFileSync('demo/index.html', 'utf-8')
const { JSDOM } = jsdom

const dom = new JSDOM(index)
global.document = dom.window.document

const getFlatChart = (params: ChartParams): any =>
  JSON.parse(JSON.stringify(new Chart(params)))

describe('Chart', () => {
  it('should accept ID string to get DOM element and initialise an empty table', () => {
    const div = document.createElement('div')
    div.setAttribute('id', 'test')
    document.body.appendChild(div)
    const chart = getFlatChart({
      containerSelector: '#test',
      label: 'Test chart',
    })
    expect(typeof chart.container).toBe('object')
  })

  it('should accept DOM element and initialise an empty table', () => {
    const containerElement = document.createElement('div')
    const chart = getFlatChart({ containerElement, label: 'Test chart' })
    expect(typeof chart.container).toBe('object')
  })

  it('should throw error for missing container', () => {
    expect(
      () =>
        new Chart({
          containerSelector: 'nothing',
          label: 'test',
        })
    ).toThrow(new Error('No valid DOM element or selector provided for chart.'))
  })

  it('should throw error for missing label', () => {
    const containerElement = document.createElement('div')
    expect(() => new Chart({ containerElement, label: '' })).toThrow(
      new Error('Unable to render the chart.')
    )
  })

  it('should initialise with config and data', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      containerElement: document.createElement('div'),
      data,
      config,
      label,
    })
    expect(chart.configs.get('default')).toEqual(config)
    expect(chart.dataSets.get('default')).toEqual(data)
  })

  it('should initialise then allow later addition config and data', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      containerElement: document.createElement('div'),
      label,
    })
    chart.setConfig('myConfig', config)
    chart.setData('myData', data, 'myConfig')
    expect(chart.configs.get('myConfig')).toEqual(config)
    expect(chart.dataSets.get('myData')).toEqual(data)
  })

  it('should initialise then allow later addition of data', () => {
    const { data, label } = randomData()
    const chart = new Chart({
      containerElement: document.createElement('div'),
      label,
    })
    chart.setData('myData', data, 'myConfig')
    expect(chart.dataSets.get('myData')).toEqual(data)
  })

  it('should allow removal of config and data', () => {
    const chart = new Chart({
      containerElement: document.createElement('div'),
      ...randomData(),
    })
    expect(chart.configs.get('default')).toBeDefined()
    expect(chart.dataSets.get('default')).toBeDefined()
    chart.deleteConfig('default')
    chart.deleteData('default')
    expect(chart.configs.get('default')).toBeUndefined()
    expect(chart.dataSets.get('default')).toBeUndefined()
  })

  it('should throw an error when trying to remove invalid config/data', () => {
    const chart = new Chart({
      containerElement: document.createElement('div'),
      ...randomData(),
    })
    expect(() => chart.deleteConfig('custom')).toThrow(
      new Error('Attempted to delete a config that does not exist.')
    )
    expect(() => chart.deleteData('custom')).toThrow(
      new Error('Attempted to delete a data set that does not exist.')
    )
  })

  it('should throw an error for invalid config', () => {
    const { config, label } = randomData()
    const chart = new Chart({
      containerElement: document.createElement('div'),
      label,
    })
    // @ts-expect-error
    delete config.values
    expect(() => chart.setConfig('myConfig', config)).toThrow(
      new Error('No valid configuration provided for chart.')
    )
  })

  it('should throw an error for invalid data', () => {
    const { config, label } = randomData()
    const chart = new Chart({
      containerElement: document.createElement('div'),
      label,
    })
    chart.setConfig('myConfig', config)
    // @ts-expect-error
    expect(() => chart.setData('myData', 'data', 'myConfig')).toThrow(
      new Error('No valid data provided for chart.')
    )
  })
})
