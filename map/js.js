// $(document).ready(function() {
//   $('#container').autoscroll();
// });

let viewport = document.querySelector('#container')
let content = viewport.querySelector('.bib')
let img = content.querySelector('img')

let sb = new ScrollBooster({
  viewport,
  content,
  emulateScroll: true,
  onUpdate: (data)=> {
    content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px
    )`
  }
})

img.addEventListener('load', () => {
  // update sizes/metrics after image load
  sb.updateMetrics()

  // set viewport position to the center of an image
  let offsetX = img.scrollWidth - viewport.offsetWidth
  let offsetY = img.scrollHeight - viewport.offsetHeight
  sb.setPosition({
    x: offsetX / 2,
    y: offsetY / 2.3
  })
})
