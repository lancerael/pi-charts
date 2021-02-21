import { css } from './'

describe('css', () => {
  it('should parse the template', () => {
    const color = 'red'
    const style = css`
      h1 {
        color: ${color};
      }
    `
    expect(style.replace(/( |\r\n|\n|\r)/gm, '')).toBe('h1{color:red;}')
  })
})
