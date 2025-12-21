<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { FireOutlined } from '@ant-design/icons-vue';

const name = 'vue js';
</script>

<template>
  <div class="root">I love {{ name }}</div>
  <Button>
    Click!
    <FireOutlined />
  </Button>
</template>

<style lang="scss" scoped>
.root {
  background: var(--bg-primary);
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-600);
}
</style>
