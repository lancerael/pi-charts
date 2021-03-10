import { totalMargin, Key } from './'
import { select } from 'd3-selection'
import jsdom from 'jsdom'
import fs from 'fs'

const { JSDOM } = jsdom
const index = fs.readFileSync('demo/index.html', 'utf-8')
const dom = new JSDOM(index)
global.document = dom.window.document

const d3Svg = select(document.body).append('svg')
const padding = { l: 45, r: 5, t: 25, b: 85 }
const dimensions = {
  left: 0,
  width: 0,
  top: 0,
  height: 0,
  innerWidth: 0,
  innerHeight: 0,
  resizeOffset: 0,
}
const values = [
  { name: 'Type 1', labelWidth: 22 },
  { name: 'Type 2', labelWidth: 22 },
  { name: 'Type 3', labelWidth: 22 },
  { name: 'Type 4', labelWidth: 22 },
]

describe('totalMargin', () => {
  it('should calculate the total margin', () => {
    expect(totalMargin(values, 4)).toBeGreaterThan(0)
  })
  it('should return an empty margin when no length provided', () => {
    expect(totalMargin(values)).toBe(0)
  })
  it('should return an empty margin when no widths provided', () => {
    expect(
      totalMargin(
        values.map(({ labelWidth, ...value }) => ({ ...value })),
        4
      )
    ).toBe(0)
  })
})

describe('Key', () => {
  it('should create a key', () => {
    const key = new Key({
      values,
      d3Svg,
      dimensions,
      padding,
    })
    expect(
      d3Svg.node()?.querySelectorAll('.pic-key-label').length
    ).toBeGreaterThan(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-key').length).toBeGreaterThan(0)
  })

  it('should throw correct errors', () => {
    // @ts-expect-error - forcing incorrect usage for test
    expect(() => new Key({})).toThrow(
      new Error('Incorrect parameters provided to Key constructor.')
    )
  })
})
