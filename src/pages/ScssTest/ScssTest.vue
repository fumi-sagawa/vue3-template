<script setup lang="ts"></script>

<template>
  <div>
    <h1>画面幅で背景色が変わります</h1>
    <div class="min0">min0px</div>
    <div class="min375">min375px</div>
    <div class="min768">min768px</div>
    <div class="min1366">min1366px</div>
    <div class="scssVariable">scss変数</div>
  </div>
</template>

<style lang="scss" scoped>
.min0 {
  font-weight: bold;
  background-color: rgb(212, 212, 212);
}

@include mq(sm) {
  .min375 {
    font-weight: bold;
    background-color: rgb(255, 228, 228);
  }
}

@include mq(md) {
  .min768 {
    background-color: rgb(229, 247, 235);
  }
}
@include mq(lg) {
  .min1366 {
    background-color: rgb(228, 237, 255);
  }
}

.scssVariable {
  color: $color-main;
}
</style>
