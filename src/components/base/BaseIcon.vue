<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import * as icons from "../icons";
type Props = {
  name: keyof typeof icons;
};
const props = defineProps<Props>();
const loadAsyncIcon = computed(() =>
  defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`))
);
</script>

<template>
  <component :is="loadAsyncIcon" />
</template>

<style scoped></style>
