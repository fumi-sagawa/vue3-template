<script setup lang="ts">
import { useFizzBuzz } from '../hooks/useFizzBuzz';
import FizzBuzz from '../components/FizzBuzz.vue';
const { count, up, reset, result } = useFizzBuzz();
</script>

<template>
  <h1>FizzBuzzの例</h1>
  <div class="demo">
    <FizzBuzz />
  </div>
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
