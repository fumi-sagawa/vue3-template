<template>
  <h1>FizzBuzzの例</h1>
  <div class="demo">
    <div class="fizzBuzzView">
      数値：{{ count }}<br />
      解答：{{ result }}<br />
      <button @click="up">カウントアップ</button>
      <button @click="reset">リセット</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFizzBuzz } from '../../hooks/useFizzBuzz';
const { count, up, reset, result } = useFizzBuzz();
</script>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
