function resizeFont() {
  const heroHeadings = document.querySelectorAll('.hero-headline h2')
  const parent = document.querySelector('.hero-headline')

  heroHeadings.forEach(el => {
    if (el.style.fontSize) {
      el.style.fontSize = ''
    }
    const maxHeight = parent.offsetHeight - parseInt(getComputedStyle(el).marginTop, 10) * 2
    const text = el.firstChild
    const height = text.offsetHeight
    if (height > maxHeight) {
      const size = parseInt(getComputedStyle(el).fontSize, 10)
      const lineHeight = parseInt(getComputedStyle(el).lineHeight, 10) / size
      const maxSize = maxHeight / lineHeight / 3
      const minSize = maxHeight / height * size
      let fontSize = minSize
      el.style.fontSize = fontSize + 'px'
      while(fontSize < maxSize) {
        if (text.offsetHeight > maxHeight) {
          fontSize = Math.floor(fontSize - 1)
          el.style.fontSize = fontSize + 'px'
          break
        }
        fontSize += 1
        el.style.fontSize = fontSize + 'px'
      }
    }
  })
}

window.addEventListener('resize', resizeFont)
window.addEventListener('orientationchange', resizeFont)
resizeFont()
