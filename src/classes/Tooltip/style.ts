import { css } from '../../helpers/utilities'

interface TooltipStyle {
  color?: string
  backgroundColor?: string
  theme?: string
}

export const style = ({
  color,
  backgroundColor,
  theme = 'light',
}: TooltipStyle = {}): void => {
  const text = theme === 'light' ? '#003A73' : '#A8D4FF'
  const background = theme === 'light' ? '#F0F8FF' : '#000E1A'
  css`
    :root {
      --text: ${color ?? text};
      --background: ${backgroundColor ?? background};
    }
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      color: var(--text);
      background-color: var(--background);
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      border: 1px solid var(--text);
      border-radius: 5px;
      box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
    }
  `
}
