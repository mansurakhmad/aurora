<script setup lang="ts">
import { Select } from 'ant-design-vue';
import { Option } from 'ant-design-vue/es/vc-select';
</script>

<template>
  <Select class="currency" default-value="USD">
    <Option value="USD">USD</Option>
    <Option value="EURO">EURO</Option>
    <Option value="RUB">RUB</Option>
    <Option value="BYN">BYN</Option>
  </Select>
</template>

<style lang="scss" scoped>
.currency {
  width: 85px;
  background-color: var(--gray-400-o-85);
  font-weight: 500;
  color: var(--text-primary);
  border: 2px solid var(--white);
  border-radius: 8px;
  :deep(.ant-select-selector) {
    background-color: transparent;
  }
}
</style>
