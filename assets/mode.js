(function() {
  const detectMode = () => {
    if (sessionStorage['dark-theme']) {
      document.documentElement.classList.add('dark-theme')
    }
  }
  detectMode()
})()
