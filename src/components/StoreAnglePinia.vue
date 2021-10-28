<script setup lang="ts">
import { toRef } from 'vue';
import { useStoreAngle } from '../hooks/useStoreAnglePinia';

const props = defineProps<{
  unit: 'deg' | 'rad';
}>();
const angle = useStoreAngle(toRef(props, 'unit'));
</script>

<template>
  <div><input v-model.number="angle" type="text" />{{ unit }}</div>
</template>
