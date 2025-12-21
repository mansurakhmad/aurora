<template>
  <div class="baseLayout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.baseLayout {
  padding: 12px;
  background: var(--bg-primary);
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-600);
  min-height: 100vh;

  .content {
    max-width: 1120px;
    margin: 80px auto 0;
  }
}
</style>
