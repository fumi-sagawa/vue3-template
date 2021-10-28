<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '../store/todo';
// import { storeToRefs } from 'pinia';

const Todos = useTodoStore();
const todos = computed(() => Todos.getAllTodos);
const isEmpty = computed(() => Todos.todoEmpty);
const removeTodo = Todos.removeTodo;

const newTodo = ref('');
const addTodo = () => {
  if (newTodo.value != '') {
    Todos.addTodo(newTodo.value);
    newTodo.value = '';
  }
};
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
