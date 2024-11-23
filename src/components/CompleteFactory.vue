<template>
  <Table title="Usine complete" :headers="FactoryLineHeaders" :data="data" />
</template>

<script setup lang="ts">
import { FactoryLineType } from '../types';
import { computed } from 'vue';
import Table from './Table.vue';
import { FactoryLineHeaders } from '../common.ts';
import { getTotal } from '../controllers';

export type Props = {
  left: FactoryLineType[];
  right: FactoryLineType[];
}
const props = defineProps<Props>();

const data = computed<FactoryLineType[]>(() => {
  const left = getTotal('Gauche', props.left);
  const right= getTotal('Droite', props.right);

  return [
      left,
      right,
  ];
})
</script>
