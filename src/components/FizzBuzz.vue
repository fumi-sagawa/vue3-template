<script setup lang="ts">
import { useFizzBuzz } from '../hooks/useFizzBuzz';
const { count, up, reset, result } = useFizzBuzz();
</script>

<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
