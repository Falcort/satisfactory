<template>
  <VtDataTable title="Differences" :headers="FactoryLineHeaders" :data="data">
    <template #[`item.iron`]="{ row }">
      <template v-if="row.iron > 0">
        <span class="good">{{ row.iron.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.iron.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.copper`]="{ row }">
      <template v-if="row.copper > 0">
        <span class="good">{{ row.copper.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.copper.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.coal`]="{ row }">
      <template v-if="row.coal > 0">
        <span class="good">{{ row.coal.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.coal.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.limestone`]="{ row }">
      <template v-if="row.limestone > 0">
        <span class="good">{{ row.limestone.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.limestone.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.eme`]="{ row }">
      <template v-if="row.eme > 0">
        <span class="good">{{ row.eme.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.eme.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.quartz`]="{ row }">
      <template v-if="row.quartz > 0">
        <span class="good">{{ row.quartz.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.quartz.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.caterium`]="{ row }">
      <template v-if="row.caterium > 0">
        <span class="good">{{ row.caterium.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.caterium.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.oil`]="{ row }">
      <template v-if="row.oil > 0">
        <span class="good">{{ row.oil.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.oil.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.sulfur`]="{ row }">
      <template v-if="row.sulfur > 0">
        <span class="good">{{ row.sulfur.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.sulfur.toFixed(2) }}</span>
      </template>
    </template>

    <template #[`item.bauxite`]="{ row }">
      <template v-if="row.bauxite > 0">
        <span class="good">{{ row.bauxite.toFixed(2) }}</span>
      </template>
      <template v-else>
        <span class="bad">{{ row.bauxite.toFixed(2) }}</span>
      </template>
    </template>
  </VtDataTable>
</template>

<script setup lang="ts">
import { FactoryLineType } from '../types';
import { computed } from 'vue';
import { FactoryLineHeaders } from '../common.ts';
import { VtDataTable } from 'vuetella';
import { getDifference, getTotal } from '../controllers';

export type Props = {
  left: FactoryLineType[];
  right: FactoryLineType[];
  production: FactoryLineType[];
}
const props = defineProps<Props>();

const data = computed<FactoryLineType[]>(() => {
  const left = getTotal('Gauche', props.left);
  const right = getTotal('Droite', props.right);

  const production = getTotal('Production', props.production);

  return [
    getDifference([left, right], [production]),
  ];
})
</script>

<style lang="scss">

.good, .bad {
  font-weight: bold;
  font-size: 1.8rem;
}
.good {
  color: var(--vt-color-success-500);
}

.bad {
  color: var(--vt-color-error-500);
}
</style>
