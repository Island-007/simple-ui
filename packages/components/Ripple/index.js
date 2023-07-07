/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-30 17:10:44
 * @LastEditTime: 2023-07-05 18:31:00
 * @LastEditors: zhangpeiwen
 * @Description:
 * @FilePath: \simple-ui\packages\components\Ripple\index.js
 */
import './ripple.less'

function createRipple(event) {
  const { x, y, centerX, centerY, diameter } = getRipperInfo(this, event)
  const ripple = document.createElement('div')
  ripple.classList.add('simple-ripple')
  ripple.style.opacity = '0'
  ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
  ripple.style.width = `${diameter}px`
  ripple.style.height = `${diameter}px`
  setElementStyle(this)
  this.appendChild(ripple)

  window.setTimeout(() => {
    ripple.style.opacity = '0.3'
    ripple.style.transform = `translate(${centerX}px,${centerY}px) scale3d(1,1,1)`
  }, 50)
  window.setTimeout(() => {
    removeRipple(this)
  }, 500)
}

function removeRipple(element) {
  const ripples = element.querySelectorAll('.simple-ripple')
  if (ripples.length === 0) return
  const ripple = ripples[ripples.length - 1]

  ripple.style.opacity = '0'
  ripple.parentNode?.removeChild(ripple)
}

function setElementStyle(element) {
  const { zIndex, position } = window.getComputedStyle(element)
  element.style.overflow = 'hidden'
  element.style.overflowX = 'hidden'
  element.style.overflowY = 'hidden'
  position === 'static' && (element.style.position = 'relative')
  zIndex === 'auto' && (element.style.zIndex = '1')
}

function getRipperInfo(el, event) {
  const { top, left } = el.getBoundingClientRect()
  const radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2 //波纹半径
  const diameter = radius * 2 //波纹直径

  const localX = event.clientX - left
  const localY = event.clientY - top

  // 中心坐标
  const centerX = (el.clientWidth - diameter) / 2
  const centerY = (el.clientHeight - diameter) / 2

  // 波纹的圆点坐标
  const x = localX - radius
  const y = localY - radius

  return {
    x,
    y,
    centerX,
    centerY,
    diameter
  }
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
