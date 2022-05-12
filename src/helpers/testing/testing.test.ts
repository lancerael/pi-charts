import { dispatchEvent } from './'

describe('dispatchEvent', () => {
  it('should dispatch an event', () => {
    const element = document.createElement('div')
    spyOn(element, 'dispatchEvent')
    dispatchEvent(element, 'click')
    expect(element.dispatchEvent).toHaveBeenCalled()
  })
})
