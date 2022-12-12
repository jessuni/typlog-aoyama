function detectCoverBrightness(callback) {
  const SIZE = 100
  const coverEl = document.querySelector('.entry-cover')
  if (!coverEl) return
  const url = coverEl.getAttribute('data-url')
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = function() {
    const canvas = document.createElement('canvas')
    canvas.width = SIZE
    canvas.height = SIZE
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, SIZE, SIZE)

    const data = ctx.getImageData(0, 0,canvas.width, canvas.height).data
    let r, g, b, avg
    let colorSum = 0

    for(let i = 0, len = data.length; i < len; i += 4) {
        r = data[i]
        g = data[i+1]
        b = data[i+2]
        avg = Math.round((r + g + b) / 3)
        colorSum += avg
    }

    const isDark = Math.floor(colorSum / (SIZE * SIZE)) < 127.5
    callback(isDark)
  }
  img.src = url
}

function prepareCoverControls(el, player) {
  const btn = el.querySelector('button')

  btn.addEventListener('click', () => {
    if (player) {
      player.toggle()
    } else {
      const audio = document.querySelector('audio')
      if (audio) {
        audio.paused ? audio.play() : audio.pause()
      } else return
    }
    const currentTimeEl = el.querySelector('.p-current')
    if (currentTimeEl && currentTimeEl.classList.contains('Hidden')) {
      currentTimeEl.classList.remove('Hidden')
      player.on('timeupdate', () => {
        currentTimeEl.textContent = secondToTime(player.currentTime)
      })
    }
    el.classList.contains('Playing') ? el.classList.remove('Playing') : el.classList.add('Playing')
  })
}

function secondToTime(time) {
  time = Math.round(time)
  let hour = Math.floor(time / 3600)
  let min = Math.floor((time - hour * 3600) / 60)
  let sec = Math.floor(time - hour * 3600 - min * 60)
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec
  if (hour === 0) {
    return `${min}:${sec}`
  }
  hour = hour < 10 ? '0' + hour : hour
  return `${hour}:${min}:${sec}`
}

if (window.shikwasa || document.querySelector('audio')) {
  const controlEl = document.querySelector('.entry-controls')
  detectCoverBrightness((isDark) => {
    if (isDark) {
      controlEl.classList.add('Light')
    }
    prepareCoverControls(controlEl, window.shikwasa)
    controlEl.classList.remove('Hidden')
  })
}
