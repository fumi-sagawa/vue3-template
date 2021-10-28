import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';

// Composition API
export const useTodoStore = defineStore('Todo', () => {
  // const todos = ref<string[]>([]);
  const todos = useStorage<string[]>('todos', []);
  const getAllTodos = computed(() => {
    return todos.value;
  });
  const todoEmpty = computed(() => {
    return todos.value.length <= 0;
  });
  const addTodo = (todo: string) => {
    todos.value.push(todo);
  };
  const removeTodo = (index: number) => {
    todos.value.splice(index, 1);
  };
  return {
    todos,
    getAllTodos,
    todoEmpty,
    addTodo,
    removeTodo,
  };
});

// Options API
// export const useTodoStore = defineStore({
//   id: 'todo',
//   state: () => ({
//     todos: [],
//   }),
//   getters: {
//     getAllTodos() {
//       return this.todos;
//     },
//     todoEmpty() {
//       return this.todos.length <= 0;
//     },
//   },
//   actions: {
//     addTodo(todo) {
//       this.todos.push(todo);
//     },
//     removeTodo(index) {
//       this.todos.splice(index, 1);
//     },
//   },
// });
