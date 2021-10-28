import { useTodoStore } from '../store/todo';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

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
    store.todos.push(newTodo.value);
    newTodo.value = '';
  };

  return {
    todos,
    isEmpty,
    removeTodo,
    newTodo,
    addTodo,
  };
};
