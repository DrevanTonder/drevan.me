export class Emoji {
  protected el: HTMLElement
  protected rootEl: HTMLElement

  constructor() {
    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.transform = 'translate(-50%, -50%)'

    const rootEl = document.querySelector<HTMLElement>('#emoji-layer')

    if (!rootEl) throw new Error('Could not find #emoji-layer element')

    this.rootEl = rootEl
  }

  destroy() {
    this.el.remove()
  }
}