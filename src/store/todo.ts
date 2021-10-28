import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useTodoStore = defineStore('Todo', () => {
  const todos = useStorage<string[]>('todos', []);
  return {
    todos,
  };
});
