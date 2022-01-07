<script setup lang="ts">
import StoreLength from './components/StoreLength.vue';
import StoreAngle from './components/StoreAngle.vue';
</script>

<template>
  <div>
    <h1>Piniaの例</h1>
    <div class="demo">
      <h2>何かの長さ</h2>
      <StoreLength unit="px" />
      <StoreLength unit="inch" />
      <StoreLength unit="mm" />
      <h2>何かの角度</h2>
      <StoreAngle unit="deg" />
      <StoreAngle unit="rad" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
