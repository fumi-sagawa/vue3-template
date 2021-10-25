<script setup lang="ts">
import StoreLength from '../components/StoreLength.vue';
import StoreAngle from '../components/StoreAngle.vue';
</script>

<template>
  <div>
    <h1>Vuexの例</h1>
    <div>
      Vuexストアに格納された長さ(length)と角度(angle)の2つの値を、それぞれ複数の単位で表示・更新する例です。
    </div>

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
