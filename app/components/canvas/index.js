/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

import Gradient from './gradients.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    // this.drawGrad()
    this.makeCanvas()
    this.redraw()
  }
  makeCanvas() {

    if (this.mainCanvas) {
      this.mainCanvas.remove()
    }

    this.myCanvas = document.createElement("canvas")
    this.myCanvas.setAttribute('id', 'canvas')
    this.myCanvas.width = this.winWidth
    this.myCanvas.height = this.winHeight
    document.body.appendChild(this.myCanvas)

    this.mainCanvas = document.getElementById("canvas");

    console.log("This the main canvas: ", this.mainCanvas);
    console.log("This the main canvas: ", this.mainCanvas);

    var mainContext = this.mainCanvas.getContext('2d');
    console.log(this)
    var canvasWidth = window.innerWidth
    var canvasHeight = window.innerWidth
    var angle = 0;
    var requestAnimationFrame = window.requestAnimationFrame

    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);


    var grad = mainContext.createLinearGradient(0, 0, 0, 900)
    grad.addColorStop(0, 'rgba(200,200,200,0)')
    grad.addColorStop(0.45, '#000')
    grad.addColorStop(0.5, '#000')
    grad.addColorStop(0.75, '#000')
    grad.addColorStop(1, 'rgba(200,200,200,0)')

    mainContext.fillStyle = grad
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);


    mainContext.fill();
      // maCanvas.drawGrad()

  }

  drawGrad() {


  }
  redraw() {

    function maFunction() {
      // console.log('ez');
      this.winWidth = window.innerWidth
      this.winHeight = window.innerHeight
      this.makeCanvas()
      this.drawGrad()

    }

    window.addEventListener('resize', maFunction.bind(this) );

  }
}









// export class Circle extends Canvas {
//   constructor() {
//     super()
//     this.drawGrad()
//   }
//
//
//   // drawCircle() {
//   //
//   //   // var mainContext = this.mainCanvas.getContext('2d');
//   //   // console.log(this);
//   //   // var canvasWidth = window.innerWidth;
//   //   // var canvasHeight = window.innerWidth;
//   //   // var angle = 0;
//   //   // var requestAnimationFrame = window.requestAnimationFrame
//   //
//   //
//   //
//   //
//   //   // function drawCircle() {
//   //   //
//   //   //     mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
//   //   //
//   //   //
//   //   //     var grad = mainContext.createLinearGradient(0, 0, 0, 900)
//   //   //     grad.addColorStop(0, 'rgba(200,200,200,0)')
//   //   //     grad.addColorStop(0.45, '#000')
//   //   //     grad.addColorStop(0.5, '#000')
//   //   //     grad.addColorStop(0.75, '#000')
//   //   //     grad.addColorStop(1, 'rgba(200,200,200,0)')
//   //   //
//   //   //
//   //   //     // color in the background
//   //   //     // mainContext.fillStyle = "#EEEEEE";
//   //   //     mainContext.fillStyle = grad
//   //   //     mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
//   //   //     //
//   //   //     // // draw the circle
//   //   //     // mainContext.beginPath();
//   //   //     //
//   //   //     // var radius = 25 + 15 * Math.abs(Math.cos(angle));
//   //   //     // mainContext.arc(300, 60, radius, 0, Math.PI * 2, false);
//   //   //     // mainContext.closePath();
//   //   //     //
//   //   //     // // color in the circle
//   //   //     // mainContext.fillStyle = "#0ff";
//   //   //     mainContext.fill();
//   //   //     //
//   //   //     // angle += Math.PI / 64;
//   //   //
//   //   //     requestAnimationFrame(drawCircle);
//   //   // }
//   //   // drawCircle();
//   //
//   // }
//
//
// }
