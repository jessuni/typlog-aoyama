(function () {
  // mobile viewport height fix
  const setAppHeight = () => {
      document.documentElement.style.setProperty('--aomori-full-height', `${window.innerHeight}px`)
  }

  const initMenu = () => {
    const menu = document.getElementById('menu')
    if (!menu) return
    const close = document.querySelector('.site-nav_close')
    const dropdown = document.querySelector('.site-nav')
    menu.addEventListener('click', () => {
      dropdown.classList.add('_open')
      document.body.classList.add('overlay-active')
    })
    close.addEventListener('click', () => {
      dropdown.classList.remove('_open')
      document.body.classList.remove('overlay-active')
    })
  }

  const initSlider = () => {
    const slider = document.querySelector('.featured-inner')
    if (!slider) return
    let index = 0
    const sliderItems = slider.querySelectorAll('.hero-wrap')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')
    if (!sliderItems.length || !prevBtn || !nextBtn) return
    const maxIndex = sliderItems.length - 1
    setSliderControl(index)
    let animationId = null

    prevBtn.addEventListener('click', () => {
      slide(slider, 'right')
    })
    nextBtn.addEventListener('click', () => {
      slide(slider, 'left')
    })

    slider.addEventListener('scroll', () => {
      index = Math.round(slider.scrollLeft / slider.getBoundingClientRect().width)
      setSliderControl(index)
    })

    function setSliderControl(index) {
      prevBtn.disabled = false
      nextBtn.disabled = false
      if (index <= 0) {
        index = 0
        prevBtn.disabled = true
      } else if (index >= maxIndex) {
        index = maxIndex
        nextBtn.disabled = true
      }
    }

    function slide(slider, direction = 'left') {
      const _direction = direction === 'left' ? 1 : -1
      index += _direction

      // setSliderControl(index)
      const offset = slider.getBoundingClientRect().width * index

      // IE doesn't have `scrollTo`
      // while Safari doesn't support defining scroll behavior
      if (slider.scrollTo && 'scrollBehavior' in slider.style) {
        slider.scrollTo({ left: offset, behavior: 'smooth' })
      } else {
        const isSafari = Boolean(slider.scrollTo)
        // mandatory scroll snap will ignore `scrollLeft`
        slider.style.scrollSnapType = 'x proximity'
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
            isSafari ? slider.scroll({ left: offset }) : slider.scrollLeft = offset
            slider.style.scrollSnapType = 'x mandatory'
            animationId = null
          } else {
            isSafari ? slider.scrollBy({ left: distance }) : slider.scrollLeft = slider.scrollLeft + distance

            animationId = requestAnimationFrame(step)
          }
        }
        if (animationId) {
          window.cancelAnimationFrame(animationId)
        }
        animationId = window.requestAnimationFrame(step)
      }
    }
  }

  const checkVideoValidity = () => {
    const video = document.querySelector('video')
    if (!video) return
    const promise = video.play()
    if (promise !== undefined) {
      promise.then(_ => {}).catch(err => {
        const img = video.querySelector('img')
        video.parentNode.replaceChild(img, video)
      })
    }
  }
  setAppHeight()
  window.addEventListener('resize', setAppHeight)
  initMenu()
  initSlider()
  checkVideoValidity()
})()









