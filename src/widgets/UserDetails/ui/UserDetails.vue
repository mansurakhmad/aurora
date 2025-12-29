<script setup lang="ts">
import { BaseText, CardContainer, CurrencySelect, BaseButton } from '@/shared/ui';
import { Divider, Input } from 'ant-design-vue';

const handleSubmit = () => {}
</script>

<template>
  <CardContainer class="userDetails">
    <BaseText size='xxl'">User Details</BaseText>
    <Divider class="detailsDivider"/>
    <form class="balanceForm">
      <div class="fieldsLine">
        <Input class="amount" placeholder="Enter your current balance"/>
        <CurrencySelect />
      </div>
      <BaseButton @on-click="handleSubmit">Save</BaseButton>
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
  justify-content: space-between;
  .fieldsLine {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .amount {
    background-color: var(--neutral-100);
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
