<template>
  <div class="home">
    <SimButton>测试按钮</SimButton>
    <SimButton type="primary" @click="handleClickTest">测试按钮</SimButton>
    <SimButton type="warning">测试按钮</SimButton>
    <SimButton type="danger">测试按钮</SimButton>
    <SimButton type="info">测试按钮</SimButton>
    <SimButton type="info" round>圆角按钮</SimButton>
    <SimButton type="primary" disabled>禁用按钮</SimButton>
    <SimButton type="primary" loading>测试按钮</SimButton>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const handleClickTest = function () {
      console.log('click')
    }
    return {
      handleClickTest
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
