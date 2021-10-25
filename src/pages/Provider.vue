<script setup lang="ts">
import Injectioner from '../components/Injectioner.vue';
import { provide } from 'vue';

type Name = {
  lastName: string;
  firstName: string;
};
const key = 'fullName';
const user: Name = { lastName: 'sample', firstName: 'taro' };
provide(key, user);
</script>

<template>
  <div>
    <Injectioner />
  </div>
</template>

<style lang="scss" scoped></style>
