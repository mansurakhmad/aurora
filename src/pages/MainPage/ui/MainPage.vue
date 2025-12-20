<script lang="ts" setup>
const name = "vue js";
</script>

<template>
  <div class="root">I love {{ name }}</div>
</template>

<style lang="scss" scoped>
.root {
  background: var(--bg-primary);
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-600);
}
</style>
