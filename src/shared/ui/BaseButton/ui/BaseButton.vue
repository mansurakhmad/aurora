<template>
  <Button class="baseButton" :class="type" @click="handleClick">
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
const { type = 'primary' } = defineProps<{ type?: 'primary' | 'secondary' }>();

const emit = defineEmits(['onClick']);

const handleClick = () => {
  emit('onClick');
};
</script>

<style lang="scss" scoped>
.baseButton {
  padding: 12px 16px;
  height: auto;
  border: none;
  min-width: 120px;
}
.primary {
  color: var(--neutral-50);
  background: var(--neutral-900);
}
.secondary {
  color: var(--neutral-50);
  background: var(--secondary-900);
}
</style>
