/*
 * @Author: zhangpeiwen
 * @Date: 2023-06-28 16:01:27
 * @LastEditTime: 2023-06-30 15:53:24
 * @LastEditors: zhangpeiwen
 * @Description: 
 * @FilePath: \simple-ui\example\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
