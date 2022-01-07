<script setup lang="ts">
type Props = {
  text: string;
  click: () => void;
};
const props = defineProps<Props>();
</script>

<template>
  <button @click="click">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped></style>
