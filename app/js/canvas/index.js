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

    console.log(this.earth);
    // this.init()
    this.addGradient(ctx)
  }

  init() {
    // let drawStuff = this.draw()
    // window.requestAnimationFrame(drawStuff);
    this.draw()
  }

  draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';


    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow

    let maEarth = this.earth

    ctx.drawImage(maEarth, -12, -12);

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

  }

  addGradient(ctx) {
    // var ctx = document.getElementById('canvas').getContext('2d');
    // let radgrad = ctx.createRadialGradient(245, 245, 50, 252, 250, 800);
    // radgrad.addColorStop(0, '#A7D30C');
    // radgrad.addColorStop(0.9, '#019F62');
    // ctx.fillStyle = radgrad;

     var ctx = canvas.getContext('2d');

     var lingrad2 = ctx.createLinearGradient(0,50,0,95);
     lingrad2.addColorStop(0.5, '#000');
     lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

     // assign gradients to fill and stroke styles
     ctx.fillStyle = lingrad2
     ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  }

}
