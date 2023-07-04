<!--
 * @Author: zhangpeiwen
 * @Date: 2023-06-26 10:37:30
 * @LastEditTime: 2023-06-30 17:57:25
 * @LastEditors: zhangpeiwen
 * @Description: 
 * @FilePath: \simple-ui\packages\components\Button\src\button.vue
-->
<template>
  <button
    class="sim-button"
    :class="[
      type ? 'sim-button--' + type : '',
      size ? 'sim-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    v-ripple
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
import { defineComponent } from 'vue'
import Ripple from '../Ripple/index.js'
export default defineComponent({
  name: 'SimButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['medium', 'small', 'mini'].includes(value)
      }
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        return ['primary', 'success', 'warning', 'danger', 'info', 'text', ''].includes(value)
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value)
      }
    }
  },
  directives: {
    Ripple
  },
  setup(props, { emit }) {
    const handleClick = (event) => {
      emit('click', event)
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="less">
@import '@simple-ui/components/styles/common.less';
@import './button.less';
</style>
