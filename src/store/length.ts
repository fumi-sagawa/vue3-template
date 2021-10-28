import { defineStore } from 'pinia';
import { ref } from 'vue';

//Options API
// export const useLengthStore = defineStore('main', {
//   state: () => ({
//     length: 300,
//   }),
//   actions: {
//     reset() {
//       this.length = 0;
//     },
//   },
// });

//Composition API
export const useLengthStore = defineStore('length', () => {
  const length = ref<number>(300);
  const reset = () => {
    length.value = 0;
  };
  return { length, reset };
});
