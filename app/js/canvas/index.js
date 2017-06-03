/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

import Gradient from './gradients.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.myCanvas = document.createElement("canvas")
  }
  makeCanvas() {

    this.myCanvas.width = this.winWidth
    this.myCanvas.height = this.winHeight
    this.myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(this.myCanvas)

    let addGrad = new Gradient()
    addGrad.build()

  }

  drawCircle() {

    var mainCanvas = document.getElementById("canvas");
    var mainContext = mainCanvas.getContext('2d');

    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;

    var angle = 0;

    var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;

    function drawCircle() {
        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

        // color in the background
        mainContext.fillStyle = "#EEEEEE";
        mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

        // draw the circle
        mainContext.beginPath();

        var radius = 25 + 150 * Math.abs(Math.cos(angle));
        mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
        mainContext.closePath();

        // color in the circle
        mainContext.fillStyle = "#006699";
        mainContext.fill();

        angle += Math.PI / 64;

        requestAnimationFrame(drawCircle);
    }
    drawCircle();
  }

}
