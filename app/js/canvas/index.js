import Gradient from './gradients.js'
import Draw from './draw.js'


export default class Canvas {
  constructor() {
    this.earth = new Image()
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.earth.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    // this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    this.makeCanvas()
  }
  makeCanvas() {

    let myCanvas = document.createElement("canvas")
    myCanvas.width = this.winWidth
    myCanvas.height = this.winHeight
    myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(myCanvas)

    var ctx = document.getElementById('canvas').getContext('2d')


    let addGrad = new Gradient()
    addGrad.build()
  }


}
