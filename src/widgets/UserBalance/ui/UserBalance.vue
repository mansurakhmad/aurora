<template>
  <CardContainer class="userBalance">
    <div>
      <div class="title">Total Balance</div>
      <div class="value">45.5$</div>
    </div>
    <div class="controls">
      <Switch checked-children="dollar" un-checked-children="euro" v-model:checked="isCheck" />
      <Button size="small" type="primary" class="accountDetailsButton">Account Details</Button>
    </div>
  </CardContainer>
</template>

<script setup lang="ts">
import { Button, Switch } from 'ant-design-vue';
import { ref } from 'vue';
import { CardContainer } from '@/shared/ui';

const isCheck = ref(false);
</script>

<style lang="scss" scoped>
.userBalance {
  align-items: flex-end;
  gap: 16px;
  width: min-content;
  min-width: 200px;
  .title {
    font-weight: 500;
    line-height: 28px;
    font-size: 20px;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  .value {
    font-size: 46px;
    line-height: 40px;
    color: var(--primary-600);
  }
  .controls {
    display: flex;
    gap: 8px;
    align-items: center;
    .accountDetailsButton {
      color: var(--text-on-primary);
      background: var(--primary-600);
    }
  }
}
</style>
