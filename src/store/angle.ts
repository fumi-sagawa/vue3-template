import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAngleStore = defineStore('angle', () => {
  const angle = ref<number>(60);
  return { angle };
});
