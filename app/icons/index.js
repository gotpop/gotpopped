/////////////////////////////////////////////////
// Icons
/////////////////////////////////////////////////

import triangle from './triangle.svg'

export default class Icon {
  constructor(iconType, className) {
      this.iconType = iconType
      this.className = className
      this.makeIcons()
  }
  makeIcons() {
    console.log('iconType: ', this.iconType)
    console.log('className: ', this.className)
  }
  wrapSvg() {
    // // let svg = decodeURI(this.iconType)
    // let wrap = document.createElement('span')
    // wrap.setAttribute('class', this.className)
    // // wrap.appendChild(svg)
    // console.log('Bollox')
    return 'Bollox!!!!!!!!!'
  }
}
