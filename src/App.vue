<script setup lang="ts"></script>

<template>
  <router-link to="/">TOP</router-link>
  <router-link to="/vuex">Vuex</router-link>
  <router-link to="/fizzbuzz">FizzBuzz</router-link>
  <router-view />
</template>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
