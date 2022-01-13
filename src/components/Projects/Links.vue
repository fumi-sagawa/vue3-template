<script setup lang="ts"></script>

<template>
  <div class="linkList">
    <router-link to="/">TOP</router-link>
    <router-link to="/angle">AngleWithPinia</router-link>
    <router-link to="/todo">TODOwithLocalstrage&Pinia</router-link>
    <router-link to="/fizzbuzz">FizzBuzz</router-link>
    <router-link to="/lifecycle">LifeCycle</router-link>
    <router-link to="/apitest">APITest</router-link>
    <router-link to="/scssTest">ScssTest</router-link>
  </div>
</template>

<style lang="scss" scoped>
.linkList {
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  gap: 10px;
}
</style>
