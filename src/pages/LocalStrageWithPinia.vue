<script setup lang="ts">
import { useTodo } from '../hooks/useTodo';

const { todos, isEmpty, removeTodo, newTodo, addTodo } = useTodo();
</script>

<template>
  <input v-model="newTodo" type="text" />
  <button @click="addTodo">Add Todo</button>
  <div v-if="!isEmpty">
    <p v-for="(todo, index) in todos" :key="index">
      {{ index }}. {{ todo }} <button @click="removeTodo(index)">delete</button>
    </p>
  </div>
  <div v-else>No Todos found</div>
</template>
