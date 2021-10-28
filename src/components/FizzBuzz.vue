<script setup lang="ts">
import { useFizzBuzz } from '../hooks/useFizzBuzz';
import Button from './Button.vue';

const { count, up, reset, result } = useFizzBuzz();
</script>

<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
    <Button text="カウントアップ" :click="up"></Button>
    <Button text="リセット" :click="reset"></Button>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
