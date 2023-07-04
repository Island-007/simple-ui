function createRipple(event) {
  getRipperInfo(this,event)
}

function getRipperInfo(el,event) {
  const { top,left } = el.getBoundingClientRect()
  const radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2
  const clickX = event.touches[0].clientX - left
  const clickY = event.touches[0].clientY - top
}

function mounted(el) {
  el.addEventListener('click', createRipple, { passive: true })
}

function unmounted(el) {
  el.removeEventListener('click', createRipple)
}

const Ripple = {
  mounted,
  unmounted
}

export default Ripple
