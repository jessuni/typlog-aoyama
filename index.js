init(document.querySelector('.featured-slider'))

function init(slider) {
  if (!slider) return
  let index = 0
  const sliderItems = document.querySelectorAll('.hero-wrap')
  const maxIndex = sliderItems.length - 1
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  if (!prevBtn || !nextBtn) {
    return
  }

  prevBtn.addEventListener('click', () => {
    slide('right')
  })
  nextBtn.addEventListener('click', () => {
    slide('left')
  })

  function slide(direction = 'left') {
    const step = direction === 'left' ? 1 : -1
    index = index + step

    if (index < 0) {
      index = maxIndex
    } else if (index > maxIndex) {
      index = 0
    }
    slider.style.transform = `translateX(${-100 * index}vw)`
  }
}

