<script setup lang="ts">
import StoreLength from './components/StoreLength.vue';
import StoreAngle from './components/StoreAngle.vue';
</script>

<template>
  <div>
    <h1>Vuexストアの入出力を分割する例</h1>
    <div>
      Vuexストアに格納された長さ(length)と角度(angle)の2つの値を、それぞれ複数の単位で表示・更新する例です。
      ストアの値を表示側の単位にあわせて変換する処理をコンポジション関数が担うことで、
      コンポーネントとストア両方の肥大化を防いでいます。
      <a
        href="https://github.com/ics-creative/210929_vue_composition/tree/master/src/samples/06_store"
        class="source"
        >ソースコードを見る</a
      >
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
  <div>
    引用元：ICS MEDIAさま
    <a href="https://ics.media/entry/210929/"
      >コンポーネントを小さく・きれいに設計しよう Vue Composition
      APIを活用したコンポーネント分割術</a
    >
  </div>
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
