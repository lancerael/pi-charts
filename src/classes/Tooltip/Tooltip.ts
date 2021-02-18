import { truthy } from '../../helpers'
import style from './style'

/**
 * The Tooltip
 *
 * @class Tooltip
 * @constructor
 */
export default class Tooltip {
  /**
   * DOM reference to container element
   *
   * @property container
   */
  container: HTMLElement

  /**
   * DOM reference to tooltip's main element
   *
   * @property tooltip
   */
  tooltip: HTMLElement

  /**
   * Tooltip's main timeout to close tooltip
   *
   * @property showTimeout
   */
  showTimeout: ReturnType<typeof setTimeout> | undefined

  /**
   * Tooltip's sub timeout to hide tooltip
   *
   * @property hideTimeout
   */
  hideTimeout: ReturnType<typeof setTimeout> | undefined

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
      this.container.appendChild(style)
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
    const { devicePixelRatio: zoom = 0 } = window ?? {}
    const zoomDivider = 1 + (zoom > 1 ? zoom / 20 : 0)
    const containerEdges = this.container.getBoundingClientRect()
    const pageOffsetX = containerEdges.left - 15
    const pageOffsetY = containerEdges.top
    const { clientX, clientY } = event
    this.tooltip.innerHTML = content
    if (containerEdges.width + pageOffsetX - clientX < 90) {
      this.tooltip.style.left = 'auto'
      this.tooltip.style.right = `${
        containerEdges.width - clientX + pageOffsetX + 25
      }px`
    } else {
      this.tooltip.style.left = `${clientX - pageOffsetX}px`
      this.tooltip.style.right = 'auto'
    }
    if (containerEdges.height + pageOffsetY - clientY < 35) {
      this.tooltip.style.top = 'auto'
      this.tooltip.style.bottom = `${
        containerEdges.height - clientY + pageOffsetY
      }px`
    } else {
      this.tooltip.style.top = `${clientY / zoomDivider - pageOffsetY}px`
      this.tooltip.style.bottom = 'auto'
    }
    this.tooltip.style.visibility = 'visible'
    this.tooltip.style.opacity = '0.9'
    this.cleanup()
    this.showTimeout = setTimeout(() => {
      this.hide()
    }, 5000)
  }

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
