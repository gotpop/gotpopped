/////////////////////////////////////////////////
// Html
/////////////////////////////////////////////////

export default class Html {
  constructor(options) {
    // Default options
  // this.options
  // this.options.text = 'OI'
  this.options = options

    this.build()
  }
  build() {

    console.log('options: ', this.options);
    let html = document.createElement(this.options.type)
    let htmlText = document.createTextNode('GotPop')

    html.appendChild(htmlText)

    return html

  }
}
