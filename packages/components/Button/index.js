/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-26 10:36:02
 * @LastEditTime: 2023-06-30 10:01:32
 * @LastEditors: zhangpeiwen
 * @Description:
 * @FilePath: \simple-ui\packages\components\Button\index.js
 */
import SimButton from './src/Button.vue'

SimButton.install = function (app) {
  app.component(SimButton.name, SimButton)
}

export default SimButton
