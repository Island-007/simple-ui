/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-25 18:27:06
 * @LastEditTime: 2023-06-29 11:52:04
 * @LastEditors: zhangpeiwen
 * @Description:
 * @FilePath: \LearnProject\simple-ui\packages\components\index.js
 */
import SimButton from './Button'

const components = [SimButton]

const install = (app) => {
  components.forEach((component) => {
    app.use(component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  SimButton
}
