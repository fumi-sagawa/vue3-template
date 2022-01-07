<script setup lang="ts">
import { toRef } from 'vue';
import { useStoreLength } from './useStoreLength';

const props = defineProps<{
  unit: 'px' | 'inch' | 'mm';
}>();
const length = useStoreLength(toRef(props, 'unit'));
</script>

<template>
  <div><input v-model.number="length" type="text" />{{ unit }}</div>
</template>
