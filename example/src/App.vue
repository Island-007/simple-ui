<!--
 * @Author: zhangpeiwen
 * @Date: 2023-06-28 16:01:27
 * @LastEditTime: 2023-06-30 15:56:09
 * @LastEditors: zhangpeiwen
 * @Description: 
 * @FilePath: \simple-ui\example\src\App.vue
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
