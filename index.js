init(document.querySelector('.featured-slider'))

function init(slider) {
  if (!slider) return
  let index = 0
  const sliderItems = document.querySelectorAll('.hero-wrap')
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  if (!prevBtn || !nextBtn) {
    return
  }

  prevBtn.disabled = true
  prevBtn.addEventListener('click', () => {
    slide('right')
  })
  nextBtn.addEventListener('click', () => {
    slide('left')
  })

  function slide(direction = 'left') {
    const step = direction === 'left' ? 1 : -1
    index = index + step
    index = Math.max(0, index)
    index = Math.min(index, sliderItems.length - 1)
    prevBtn.disabled = false
    nextBtn.disabled = false
    if (index === 0) {
      prevBtn.disabled = !prevBtn.disabled
    }
    if (index === sliderItems.length - 1) {
      nextBtn.disabled = !nextBtn.disabled
    }
    slider.style.transform = `translateX(${-100 * index}vw)`
  }
}

