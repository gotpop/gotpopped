/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////


export default class Gradient {

  constructor() {
    this.ctx = document.getElementById('canvas').getContext('2d')
  }

  build() {

    var grad = this.ctx.createLinearGradient(0, 50, 0, 995)
    grad.addColorStop(0.5, '#000')
    grad.addColorStop(1, 'rgba(0,0,0,0)')

    this.ctx.fillStyle = grad
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

}
