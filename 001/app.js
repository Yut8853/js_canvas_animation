let canvas, ctx

setup()
draw()

window.addEventListener('resize', () => {
  setup()
  draw()
})

function setup() {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.style.backgroundColor = '#222'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function draw() {
  // ctx.beginPath();
  // ctx.fillRect(100, 100, 100, 100)
  
  // ctx.beginPath();
  // ctx.fillRect(300, 300, 100, 100)
  
  // ctx.beginPath()
  // ctx.strokeStyle = '#fff'
  // ctx.arc(300, 300, 100, 0, Math.PI * 2)
  // ctx.stroke()

  // ctx.beginPath()
  // ctx.fillStyle = '#fff'
  // ctx.arc(300, 300, 100, 0, Math.PI * 2)
  // ctx.fill()

  // ctx.beginPath()
  // ctx.strokeStyle = '#fff'
  // ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
  // ctx.stroke()

  // ctx.save();
  // ctx.lineWidth = 10
  // ctx.beginPath()
  // ctx.strokeStyle = '#f00'
  // ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2)
  // ctx.stroke()
  // ctx.restore();

  // ctx.beginPath()
  // ctx.strokeStyle = '#fff'
  // ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2)
  // ctx.stroke()

  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height / 2, 150, 50, 0, 0, Math.PI * 2)
  ctx.stroke()
}