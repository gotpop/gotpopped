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

export default class Icon extends IconsSrc {
  constructor(iconType, className) {
      super()
      this.iconType = iconType
      this.className = className
      this.triangleSrc
      this.init()
  }
  init() {
    console.log(this);
    this.triangleSrc = decodeURI(triangleSrc)
  }
  wrapSvg() {
    let wrap = document.createElement('span')
    wrap.setAttribute('class', this.className)
    wrap.innerHTML = this.triangleSrc
    return wrap
  }
}
