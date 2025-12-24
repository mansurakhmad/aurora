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
  background-image: url('src/shared/assets/blackWiteBg.jpg');
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-600);
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    max-width: 960px;
    margin: 80px auto 0;
  }
}
</style>
