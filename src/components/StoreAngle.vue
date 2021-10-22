<template>
  <div class="StoreAngleView">
    <input v-model.number="angle" type="text" />{{ unit }}
  </div>
</template>

<script setup lang="ts">
import { PropType, toRef } from 'vue';
import { useStoreAngle } from '../hooks/useStoreAngle';
const props = defineProps({
  unit: {
    type: String as PropType<'deg' | 'rad'>,
    default: 'deg',
  },
});
const angle = useStoreAngle(toRef(props, 'unit'));
</script>
