/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-28 16:01:27
 * @LastEditTime: 2023-06-30 16:06:27
 * @LastEditors: zhangpeiwen
 * @Description:
 * @FilePath: \simple-ui\example\src\main.js
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SimpleUI from '@simple-ui/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SimpleUI)

app.mount('#app')
