<script lang="ts" setup>
import { BaseLayout } from '@/widgets/BaseLayout';
import { UserBalance } from '@/widgets/UserBalance';
</script>

<template>
  <BaseLayout>
    <UserBalance />
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
