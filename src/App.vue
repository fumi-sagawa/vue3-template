<script setup lang="ts"></script>

<template>
  <router-link to="/">TOP</router-link>
  <router-link to="/vuex">Vuex</router-link>
  <router-link to="/fizzbuzz">FizzBuzz</router-link>
  <router-view />
  <div>
    参考文献,引用元：ICS MEDIAさま
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
