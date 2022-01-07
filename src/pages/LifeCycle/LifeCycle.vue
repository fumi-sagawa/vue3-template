<script setup lang="ts">
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  watchEffect,
  ref,
} from 'vue';
//ライフサイクルのテスト
console.log('setupテスト');
onBeforeMount(() => {
  console.log('onBeforeMountテスト');
});
onMounted(() => {
  console.log('onMountedテスト');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdateテスト');
});
//watchのテスト
const testnum = ref(1);
const up = () => testnum.value++;
const minus = () => testnum.value--;
watchEffect(() =>
  console.log(`watchEffect Activated!数値は${testnum.value}！`),
);
</script>

<template>
  <h1>ライフサイクルなどのテスト(コンソール参照)</h1>
  <div class="demo">
    <div>リアクティブな値とレンダリングのテスト：{{ testnum }}</div>
    <div>
      <button @click="up">増加</button>
      <button @click="minus">減少</button>
    </div>
  </div>
</template>
<style scoped>
.demo {
  padding: 40px;
}
</style>
