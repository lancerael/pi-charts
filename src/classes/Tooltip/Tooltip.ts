import { truthy, throttle } from '../../helpers'
import { Timeout } from '../../types'
import { style } from './style'

/**
 * The Tooltip
 *
 * @class Tooltip
 * @constructor
 */
class Tooltip {
  /**
   * DOM reference to container element
   *
   * @property container
   */
  private readonly container: HTMLElement

  /**
   * DOM reference to tooltip's main element
   *
   * @property tooltip
   */
  private tooltip: HTMLElement

  /**
   * Tooltip's main timeout to close tooltip
   *
   * @property showTimeout
   */
  private showTimeout: Timeout | undefined

  /**
   * Tooltip's sub timeout to hide tooltip
   *
   * @property hideTimeout
   */
  private hideTimeout: Timeout | undefined

  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param container DOM object
   * @throws {Error} invalid DOM element
   */
  constructor(container: HTMLElement) {
    if (truthy(container.nodeName)) {
      this.container = container
      this.tooltip = document.createElement('div')
      this.tooltip.className = 'pic-tooltip'
      this.container.appendChild(this.tooltip)
      style()
    } else {
      throw new Error('The tooltip has no valid container element.')
    }
  }

  /**
   * Ping the tooltip with data and location
   *
   * @method ping
   * @param {Array} contents values or string for content
   */
  ping = (contents: string[], event: MouseEvent): void => {
    const content = `<strong>${contents[0]}</strong><br>${contents[1]}: <em>${contents[2]}</em>`
    this.tooltip.innerHTML = content
    this.move(event)
    this.tooltip.style.visibility = 'visible'
    this.tooltip.style.opacity = '0.9'
    this.cleanup()
    this.showTimeout = setTimeout(() => {
      this.hide()
    }, 5000)
  }

  move = throttle((event: MouseEvent): void => {
    // const { devicePixelRatio: zoom = 0 } = window ?? {}
    // const zoomDivider = 1 + (zoom > 1 ? zoom / 20 : 0)
    const offset = 10
    const { left, width, top, height } = this.container.getBoundingClientRect()
    const {
      width: ttWidth,
      height: ttHeight,
    } = this.tooltip.getBoundingClientRect()
    const { clientX: x, clientY: y } = event
    const xOverflow = width + left - x < ttWidth + offset
    const yOverflow = height + top - y < ttHeight + offset
    this.tooltip.style.left = `${
      x - left + (xOverflow ? -ttWidth - offset : offset)
    }px`
    this.tooltip.style.top = `${
      y - top + (yOverflow ? -ttHeight - offset : offset)
    }px`
  })

  hide = (): void => {
    this.cleanup()
    this.tooltip.style.opacity = '0'
    this.hideTimeout = setTimeout(() => {
      this.tooltip.style.visibility = 'hidden'
    }, 500)
  }

  cleanup = (): void => {
    if (this.showTimeout !== undefined) clearTimeout(this.showTimeout)
    if (this.hideTimeout !== undefined) clearTimeout(this.hideTimeout)
  }
}

export { Tooltip }
