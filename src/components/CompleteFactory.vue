<template>
  <Table title="Usine complete" :headers="FactoryLineHeaders" :data="data" />
</template>

<script setup lang="ts">
import { FactoryLineType } from '../types.ts';
import { computed } from 'vue';
import Table from './Table.vue';
import { FactoryLineHeaders } from '../common.ts';

export type Props = {
  left: FactoryLineType[];
  right: FactoryLineType[];
}
const props = defineProps<Props>();

const data = computed<FactoryLineType[]>(() => {
  const left: FactoryLineType = {
    name: 'Gauche',
  };
  const right: FactoryLineType = {
    name: 'Droite',
  };

  props.left.forEach((line) => {
    left.iron = (left.iron ?? 0) + (line.iron ?? 0);
    left.copper = (left.copper ?? 0) + (line.copper ?? 0);
    left.coal = (left.coal ?? 0) + (line.coal ?? 0);
    left.limestone = (left.limestone ?? 0) + (line.limestone ?? 0);
    left.eme = (left.eme ?? 0) + (line.eme ?? 0);
    left.quartz = (left.quartz ?? 0) + (line.quartz ?? 0);
    left.caterium = (left.caterium ?? 0) + (line.caterium ?? 0);
    left.oil = (left.oil ?? 0) + (line.oil ?? 0);
    left.sulfur = (left.sulfur ?? 0) + (line.sulfur ?? 0);
  });

  props.right.forEach((line) => {
    right.iron = (right.iron ?? 0) + (line.iron ?? 0);
    right.copper = (right.copper ?? 0) + (line.copper ?? 0);
    right.coal = (right.coal ?? 0) + (line.coal ?? 0);
    right.limestone = (right.limestone ?? 0) + (line.limestone ?? 0);
    right.eme = (right.eme ?? 0) + (line.eme ?? 0);
    right.quartz = (right.quartz ?? 0) + (line.quartz ?? 0);
    right.caterium = (right.caterium ?? 0) + (line.caterium ?? 0);
    right.oil = (right.oil ?? 0) + (line.oil ?? 0);
    right.sulfur = (right.sulfur ?? 0) + (line.sulfur ?? 0);
  });

  return [
      left,
      right,
  ];
})
</script>
