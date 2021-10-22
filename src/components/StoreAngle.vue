<template>
  <div class="StoreAngleView">
    <input v-model.number="angle" type="text" />{{ unit }}
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useStoreAngle } from '../hooks/useStoreAngle';
const props = defineProps<{
  unit: 'deg' | 'rad';
}>();
const angle = useStoreAngle(toRef(props, 'unit'));
</script>
