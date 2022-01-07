import { computed, ref } from 'vue';
import { storeToRefs, defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

const useTodoStore = defineStore('Todo', () => {
  const todos = useStorage<string[]>('todos', []);
  return {
    todos,
  };
});

export const useTodo = () => {
  //store
  const store = useTodoStore();
  const { todos } = storeToRefs(store);
  const isEmpty = computed(() => {
    return store.todos.length <= 0;
  });
  const removeTodo = (index: number) => {
    store.todos.splice(index, 1);
  };
  //local
  const newTodo = ref('');
  const addTodo = () => {
    if (newTodo.value.length) {
      store.todos.push(newTodo.value);
      newTodo.value = '';
    }
  };

  return {
    todos,
    isEmpty,
    removeTodo,
    newTodo,
    addTodo,
  };
};
