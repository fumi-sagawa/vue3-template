<script setup lang="ts"></script>

<template>
  <div>
    <div class="linkList">
      <router-link to="/">TOP</router-link>
      <router-link to="/vuex">Vuex</router-link>
      <router-link to="/pinia">Pinia</router-link>
      <router-link to="/fizzbuzz">FizzBuzz</router-link>
      <router-link to="/lifecycle">LifeCycle</router-link>
      <router-link to="/injectprovide">InjectProvide</router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.linkList {
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  gap: 10px;
}
</style>
