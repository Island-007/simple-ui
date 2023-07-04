/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-25 17:23:17
 * @LastEditTime: 2023-06-28 15:48:25
 * @LastEditors: zhangpeiwen
 * @Description:
 * @FilePath: \LearnProject\simple-ui\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
