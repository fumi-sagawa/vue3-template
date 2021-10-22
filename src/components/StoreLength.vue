<template>
  <div class="StoreLengthView">
    <input v-model.number="length" type="text" />{{ unit }}
  </div>
</template>

<script setup lang="ts">
import { PropType, toRef } from 'vue';
import { useStoreLength } from '../hooks/useStoreLength';
const props = defineProps({
  unit: {
    type: String as PropType<'px' | 'inch' | 'mm'>,
    default: 'px',
  },
});
const length = useStoreLength(toRef(props, 'unit'));
</script>
