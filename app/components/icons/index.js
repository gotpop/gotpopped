/////////////////////////////////////////////////
// Icons
/////////////////////////////////////////////////

import triangleSrc from './triangle.svg'
import circleSrc from './circle.svg'
import cubeSrc from './cube.svg'

/////////////////////////////////////////////////
// Class
/////////////////////////////////////////////////

class IconsSrc {

  constructor() {
    this.triangle = triangleSrc
    this.circle = circleSrc
    this.cube = cubeSrc
  }

}

export default class Icon {

  constructor(iconType, className) {
    this.iconType = iconType
    this.className = className
    this.currentSvg
    this.loopObject()
  }

  loopObject() {

    let iconsObject = new IconsSrc

    for (let key in iconsObject) {
      if (key === this.iconType) {
        let decode = iconsObject[key]
        this.currentSvg = decodeURI(decode)
      }
    }

  }

  removeTextNode(wrap) {

    let check = wrap.childNodes[0]
    check.remove()

  }

  build() {
    let wrap = document.createElement('span')
    wrap.setAttribute('class', this.className)
    wrap.innerHTML = this.currentSvg

    this.removeTextNode(wrap)

    return wrap
  }
}
