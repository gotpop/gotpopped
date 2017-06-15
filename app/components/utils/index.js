/////////////////////////////////////////////////
// Html
/////////////////////////////////////////////////

export default class Html {
  constructor(options) {
    this.options = options
    this.type = options.type
    this.text = options.text
    this.id = options.id
    this.class = options.class
    this.dataId = options.dataId
    this.href = options.href
    this.html

    this.build()
  }
  build() {

    this.buildThis()
    return this.html

  }

  buildThis() {

    if (this.type !== undefined) {
      this.html = document.createElement(this.options.type)
    }

    if (this.text !== undefined) {
      let htmlText = document.createTextNode(this.options.text)
      this.html.appendChild(htmlText)
    }

    if (this.id !== undefined) {
      this.html.setAttribute('id', this.id)
    }

    if (this.class !== undefined) {
      this.html.setAttribute('class', this.class)
    }

    if (this.dataId !== undefined) {
      this.html.setAttribute('data-id', this.dataId)
    }

    if (this.href !== undefined) {
      this.html.setAttribute('href', this.href)
    }

  }

}
