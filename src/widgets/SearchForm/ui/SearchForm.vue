<template>
  <div class="searchForm">
    <div class="title">Search Form</div>
    <div class="body">content</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.searchForm {
  @include boxShadow;
  @include blockBorder;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .title {
    font-weight: 500;
    line-height: 30px;
    font-size: 24px;
    color: var(--primary-600);
  }
  .body {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: var(--text-primary);
  }
}
</style>
