(function () {
  // mobile viewport height fix
  const appHeight = () => {
    document.documentElement.style.setProperty('--aomori-full-height', `${window.innerHeight}px`)
}
  window.addEventListener('resize', appHeight)
  appHeight()

  // feature slider
  const slider = document.querySelector('.featured-inner')
  if (!slider) return
  let index = 0
  const sliderItems = slider.querySelectorAll('.hero-wrap')
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  if (!sliderItems.length || !prevBtn || !nextBtn) return
  prevBtn.disabled = true
  nextBtn.disabled = false
  const maxIndex = sliderItems.length - 1
  let animationId = null

  prevBtn.addEventListener('click', () => {
    slide(slider, 'right')
  })
  nextBtn.addEventListener('click', () => {
    slide(slider, 'left')
  })

  function slide(slider, direction = 'left') {
    const _direction = direction === 'left' ? 1 : -1
    index += _direction

    prevBtn.disabled = false
    nextBtn.disabled = false
    if (index <= 0) {
      index = 0
      prevBtn.disabled = !prevBtn.disabled
    } else if (index >= maxIndex) {
      index = maxIndex
      nextBtn.disabled = !nextBtn.disabled
    }
    const offset = slider.getBoundingClientRect().width * index

    // IE doesn't have `scrollTo`
    // while Safari doesn't support defining scroll behavior
    if (slider.scrollTo && 'scrollBehavior' in slider.style) {
      slider.scrollTo({ left: offset, behavior: 'smooth' })
    } else {
      let start
      const duration = 1000
      function step(timestamp) {
        if (!start) {
          start = timestamp
        }
        const time = timestamp - start
        // speed decreases as the node gets closer to the end
        const speed = Math.max(Math.abs((offset - slider.scrollLeft) / duration), 1 / duration)
        const distance = time * speed * _direction

        // when distance is within acceptable range, stop animation
        if (speed <= 1 / duration || time > duration) {
          start = 0
          slider.scrollLeft = offset
          animationId = null
        } else {
          slider.scrollLeft = slider.scrollLeft + distance
          animationId = requestAnimationFrame(step)
        }
      }

      if (animationId) {
        window.cancelAnimationFrame(animationId)
      }
      animationId = window.requestAnimationFrame(step)
    }
  }
})()









