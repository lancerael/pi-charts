const style = document.createElement('style')

style.innerHTML = /* css */ `
  .pic-tooltip {
    transition: opacity 0.5s;
    position: absolute;
    color: blue;
    background-color: white;
    opacity: 0;
    visibility: hidden;
  }
`

export default style
