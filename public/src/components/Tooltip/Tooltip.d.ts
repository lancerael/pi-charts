/**
 * The Tooltip
 *
 * @class Tooltip
 * @constructor
 */
export declare class Tooltip {
    /**
     * DOM reference to container element
     *
     * @property container
     */
    private readonly container;
    /**
     * DOM reference to tooltip's main element
     *
     * @property tooltip
     */
    private tooltip;
    /**
     * Tooltip's main timeout to close tooltip
     *
     * @property showTimeout
     */
    private showTimeout;
    /**
     * Tooltip's sub timeout to hide tooltip
     *
     * @property hideTimeout
     */
    private hideTimeout;
    /**
     * Constructor function that sets up the local object.
     *
     * @method constructor
     * @param container DOM object
     * @throws {Error} invalid DOM element
     */
    constructor(container: HTMLElement);
    /**
     * Ping the tooltip with data and location
     *
     * @method ping
     * @param contents values or string for content
     * @param event the bworser event object for mouse move
     */
    ping: (contents: string[] | string, event: MouseEvent) => void;
    /**
     * Move the tooltip based on the mouse event location
     *
     * @method throttle
     * @param event the bworser event object for mouse move
     */
    private readonly move;
    /**
     * Hide the tooltip
     *
     * @method hide
     */
    hide: () => void;
    /**
     * Clean up the timeouts
     *
     * @method hide
     */
    private readonly cleanup;
}
