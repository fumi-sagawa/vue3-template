<script setup lang="ts">
import { inject } from 'vue';

type Name = {
  lastName: string;
  firstName: string;
};

const user = inject('fullName') as Name;
</script>

<template>
  <div>フルネーム: {{ user.lastName }} {{ user.firstName }}</div>
</template>

<style lang="scss" scoped></style>
