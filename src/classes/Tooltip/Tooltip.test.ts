import { Tooltip } from './'
import jsdom from 'jsdom'
import fs from 'fs'

const index = fs.readFileSync('demo/index.html', 'utf-8')
const { JSDOM } = jsdom

const dom = new JSDOM(index)
global.document = dom.window.document

jasmine.clock().install()

const dispatchEvent = (element: HTMLElement, eventType: string): MouseEvent => {
  const event = document.createEvent('MouseEvents')
  event.initEvent(eventType, true, true)
  element.dispatchEvent(event)
  return event
}

const getFlatTooltip = (container: HTMLElement): any =>
  JSON.parse(JSON.stringify(new Tooltip(container)))

describe('Tooltip', () => {
  it('should accept DOM element to contain the tooltip', () => {
    const container = document.createElement('div')
    const tooltip = getFlatTooltip(container)
    expect(typeof tooltip.container).toBe('object')
  })

  it('should throw error for missing container', () => {
    // @ts-expect-error - forcing incorrect usage for test
    expect(() => new Tooltip('nothing')).toThrow(
      new Error('The tooltip has no valid container element.')
    )
  })

  it('should ping the tooltip and hide it after the timeout', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    jasmine.clock().tick(6000)
    expect(tooltipElement?.style.visibility).toBe('hidden')
  })

  it('should allow manually closing of tooltip', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    tooltip.hide()
    jasmine.clock().tick(600)
    expect(tooltipElement?.style.visibility).toBe('hidden')
  })

  it('cleans up timers after hiding', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    tooltip.hide()
    jasmine.clock().tick(400)
    tooltip.hide()
    jasmine.clock().tick(400)
    expect(tooltipElement?.style.visibility).toBe('visible')
  })
})