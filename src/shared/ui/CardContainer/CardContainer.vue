<template>
  <div class="cardContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cardContainer {
  @include boxShadow;
  @include blockBorder;
  padding: 16px 24px;
  display: flex;
  background: var(--gray-400-o-10);
}
</style>
