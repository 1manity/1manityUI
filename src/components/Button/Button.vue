<template>
  <button
    class="iui-button"
    :class="{
      [`iui-button--${type}`]: type,
      [`iui-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading
    }"
  >
    <slot />
  </button>
</template>
<script setup>
import props from '@/components/Button/props.js'
import {ref} from "vue";

defineOptions({
  name: 'iui-Button'
})
defineProps(props)
// 回头通过 _ref 就可以获取到 button 元素
const _ref = ref(null)

defineExpose({
  ref: _ref
})
</script>

<style scoped lang="scss"></style>
