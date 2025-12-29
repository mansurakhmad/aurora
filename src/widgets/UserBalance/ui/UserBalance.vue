<template>
  <CardContainer class="userBalance">
    <BaseText size='xxl'">Total Balance</BaseText>
    <div class="body">
      <div class="balance">
        <div class="value">45.5$</div>
        <Switch
          size="default"
          checked-children="dollar"
          un-checked-children="euro"
          v-model:checked="isCheck"
        />
      </div>
      <BaseButton @on-click="goToProfile">Account details</BaseButton>
    </div>
  </CardContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Switch } from 'ant-design-vue';
import { BaseButton, CardContainer, BaseText } from '@/shared/ui';
import { APP_ROUTERS } from '@/shared/constants';

const router = useRouter();
const isCheck = ref(false);

const goToProfile = () => router.push(APP_ROUTERS.PROFILE_PAGE);
</script>

<style lang="scss" scoped>
.userBalance {
  gap: 16px;
  min-width: 200px;
  flex-direction: column;
  .title {
    font-weight: 500;
    line-height: 40px;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--neutral-950);
  }
  .value {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    color: var(--secondary-900);
  }
  .body {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
  }
  .balance {
    display: flex;
    gap: 24px;
    align-items: center;
  }
}
</style>
