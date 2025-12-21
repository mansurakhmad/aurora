<script lang="ts" setup>
import { BaseLayout } from '@/widgets/BaseLayout';
import { SearchForm } from '@/widgets/SearchForm';
</script>

<template>
  <BaseLayout>
    <SearchForm />
  </BaseLayout>
</template>

<style lang="scss" scoped>
.root {
  background: var(--bg-primary);
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-600);
}
</style>
