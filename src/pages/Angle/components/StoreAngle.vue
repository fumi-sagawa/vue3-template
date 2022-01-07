<script setup lang="ts">
import { toRef } from 'vue';
import { useStoreAngle } from './useStoreAngle';

const props = defineProps<{
  unit: 'deg' | 'rad';
}>();
const angle = useStoreAngle(toRef(props, 'unit'));
</script>

<template>
  <div><input v-model.number="angle" type="text" />{{ unit }}</div>
</template>
