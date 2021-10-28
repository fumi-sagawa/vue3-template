import { defineStore } from 'pinia';
import { ref } from 'vue';

//Options API
// export const useAngleStore = defineStore('angle', {
//   state: () => ({
//     angle: 60,
//   }),
//   actions: {
//     reset() {
//       this.angle = 0;
//     },
//   },
// });

//Composition API
export const useAngleStore = defineStore('angle', () => {
  const angle = ref<number>(60);
  const reset = () => {
    angle.value = 0;
  };
  return { angle, reset };
});
