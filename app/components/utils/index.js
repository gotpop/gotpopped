/////////////////////////////////////////////////
// Html
/////////////////////////////////////////////////

export default class Html {
  constructor(options) {
    // Default options
  // this.options
  // this.options.text = 'OI'
  this.options = options
  this.type = options.type
  this.text = options.text


    this.build()
  }
  build() {

    console.log('options: ', this);
    let html = document.createElement(this.options.type)
    let htmlText = document.createTextNode(this.options.text)

    html.appendChild(htmlText)

    return html

  }
}
