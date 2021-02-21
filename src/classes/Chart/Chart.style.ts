import { css, box } from '../../theming'

export const style = (): void => {
  css`
    .pic-svg {
      ${box}
    }

    .pic-title {
      position: absolute;
      width: 100%;
      text-align: center;
      margin: 8px 0;
      font-weight: bold;
      color: var(--text);
    }
  `
}
