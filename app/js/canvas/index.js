export default class Canvas {
  constructor() {
    this.earth = new Image()
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.earth.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    this.makeCanvas()
  }
  makeCanvas() {

    var earth = new Image()
    let winWidth = window.innerWidth
    let winHeight = window.innerHeight
    let myCanvas = document.createElement("canvas")
    myCanvas.width = winWidth
    myCanvas.height = winHeight
    myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(myCanvas)
    var ctx = document.getElementById('canvas').getContext('2d')
    //
    // let radgrad = ctx.createRadialGradient(245, 245, 50, 252, 250, 800);
    // radgrad.addColorStop(0, '#A7D30C');
    // radgrad.addColorStop(0.9, '#019F62');
    // ctx.fillStyle = radgrad;
    //
    // ctx.drawImage(earth, 300, 300);
    //
    // function init() {
    //   window.requestAnimationFrame(draw)
    // }
    //
    // function draw() {
    //
    //   ctx.clearRect(0, 0, winWidth, winHeight) // clear canvas
    //   ctx.save()
    //   // ctx.translate(100, 300)
    //
    //   ctx.fillRect(0, 0, winWidth, winHeight);
    //
    //   var time = new Date()
    //   ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 600) * time.getMilliseconds())
    //   ctx.drawImage(earth, 300, 300);
    //   ctx.restore();
    //   window.requestAnimationFrame(draw)
    // }
    //
    // init()



    var sun = new Image();
    var moon = new Image();
    var earth = new Image();
    function init() {
      sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
      moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
      earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
      window.requestAnimationFrame(draw);
    }

    function draw() {
      var ctx = document.getElementById('canvas').getContext('2d');

      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0, 0, 300, 300); // clear canvas

      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
      ctx.save();
      ctx.translate(150, 150);

      // Earth
      var time = new Date();
      ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
      ctx.translate(105, 0);
      ctx.fillRect(0, -12, 50, 24); // Shadow
      ctx.drawImage(earth, -12, -12);

      // Moon
      ctx.save();
      ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
      ctx.translate(0, 28.5);
      ctx.drawImage(moon, -3.5, -3.5);
      ctx.restore();

      ctx.restore();

      ctx.beginPath();
      ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
      ctx.stroke();

      ctx.drawImage(sun, 0, 0, 300, 300);

      window.requestAnimationFrame(draw);
    }

    init();




  }
}
