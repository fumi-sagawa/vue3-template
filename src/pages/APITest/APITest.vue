<script setup lang="ts">
import { ref, onMounted } from 'vue';

type User = {
  name: string;
  id: number;
};
const users = ref<User[]>([]);

onMounted(async () => {
  const res = await fetch('/users');
  users.value = await res.json();
  console.log(res);
  console.log(users.value);
});
</script>

<template>
  <div>
    <h1>Users（コンソール参照）</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        id: {{ user.id }}, name: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
