import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLengthStore = defineStore('length', () => {
  const length = ref<number>(300);
  return { length };
});
