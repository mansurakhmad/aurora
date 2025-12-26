<template>
  <p :class="[`size-${size}`, 'text']">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
type Size = 'xs' | 's' | 'md' | 'l' | 'xl' | 'xxl';
const { size = 'md' } = defineProps<{ size?: Size }>();
</script>

<style scoped lang="scss">
.text {
  color: var(--text-primary);

  &.size-xs {
    font-size: 12px;
    line-height: 14px;
  }
  &.size-s {
    font-size: 14px;
    line-height: 16px;
  }
  &.size-md {
    font-size: 16px;
    line-height: 20px;
  }
  &.size-l {
    font-size: 20px;
    line-height: 26px;
  }
  &.size-xl {
    font-size: 24px;
    line-height: 28px;
  }
  &.size-xxl {
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
  }
}
</style>
