<script setup lang="ts">
import { BaseText, CardContainer, CurrencySelect } from '@/shared/ui';
import { Button, Divider, Input } from 'ant-design-vue';
</script>

<template>
  <CardContainer class="userDetails">
    <BaseText size='xxl'">User Details</BaseText>
    <Divider class="detailsDivider"/>
    <form class="balanceForm">
      <Input class="amount" placeholder="Enter your current balance"/>
      <CurrencySelect />
      <Button class="saveButton">Save</Button>
    </form>
  </CardContainer>
</template>

<style lang="scss" scoped>
.userDetails {
  flex-direction: column;
  .detailsDivider {
    border-block-start: 1px solid rgba(5, 5, 5, 1);
  }
}

.balanceForm {
  display: flex;
  align-items: center;
  gap: 12px;
  .amount {
    background-color: var(--gray-400-o-85);
    font-weight: 500;
    width: 200px;
    border: 2px solid var(--white);
    &::placeholder {
      color: var(--text-primary);
    }
  }
  .saveButton {
    background-color: var(--gray-400-o-85);
    border: 2px solid var(--white);
    height: 100%;
    font-weight: 600;
  }
}
</style>
