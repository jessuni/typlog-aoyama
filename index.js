(function (slider) {
  if (!slider) return
  let index = 0
  const sliderItems = slider.querySelectorAll('.hero-wrap')
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  if (!sliderItems.length || !prevBtn || !nextBtn) return
  const maxIndex = sliderItems.length - 1

  prevBtn.addEventListener('click', () => {
    slide(slider, 'right')
  })
  nextBtn.addEventListener('click', () => {
    slide(slider, 'left')
  })

  function slide(slider, direction = 'left') {
    index += direction === 'left' ? 1 : -1
    if (index < 0) {
      index = maxIndex
    } else if (index > maxIndex) {
      index = 0
    }
    const offset = slider.getBoundingClientRect().width * index
    if (slider.scrollTo) {
      slider.scrollTo({ left: offset, behavior: 'smooth' })
    } else {
      // IE polyfill
      slider.scrollLeft = offset
    }
  }
})(document.querySelector('.featured-inner'))


