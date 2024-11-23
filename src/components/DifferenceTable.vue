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
  </VtDataTable>
</template>

<script setup lang="ts">
import { FactoryLineType } from '../types.ts';
import { computed } from 'vue';
import { FactoryLineHeaders } from '../common.ts';
import { VtDataTable } from 'vuetella';

export type Props = {
  left: FactoryLineType[];
  right: FactoryLineType[];
  production: FactoryLineType[];
}
const props = defineProps<Props>();

const data = computed<FactoryLineType[]>(() => {
  const left: FactoryLineType = {
    name: 'Gauche',
  };
  const right: FactoryLineType = {
    name: 'Droite',
  };

  const production: FactoryLineType = {
    name: 'Production',
  };

  const total: FactoryLineType = {
    name: 'Total',
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

  props.production.forEach((line) => {
    production.iron = (production.iron ?? 0) + (line.iron ?? 0);
    production.copper = (production.copper ?? 0) + (line.copper ?? 0);
    production.coal = (production.coal ?? 0) + (line.coal ?? 0);
    production.limestone = (production.limestone ?? 0) + (line.limestone ?? 0);
    production.eme = (production.eme ?? 0) + (line.eme ?? 0);
    production.quartz = (production.quartz ?? 0) + (line.quartz ?? 0);
    production.caterium = (production.caterium ?? 0) + (line.caterium ?? 0);
    production.oil = (production.oil ?? 0) + (line.oil ?? 0);
    production.sulfur = (production.sulfur ?? 0) + (line.sulfur ?? 0);
  });

  total.iron = ((production.iron ?? 0) - ((left.iron ?? 0) + (right.iron ?? 0)));
  total.copper = ((production.copper ?? 0) - ((left.copper ?? 0) + (right.copper ?? 0)));
  total.coal = ((production.coal ?? 0) - ((left.coal ?? 0) + (right.coal ?? 0)));
  total.limestone = ((production.limestone ?? 0) - ((left.limestone ?? 0) + (right.limestone ?? 0)));
  total.eme = ((production.eme ?? 0) - ((left.eme ?? 0) + (right.eme ?? 0)));
  total.quartz = ((production.quartz ?? 0) - ((left.quartz ?? 0) + (right.quartz ?? 0)));
  total.caterium = ((production.caterium ?? 0) - ((left.caterium ?? 0) + (right.caterium ?? 0)));
  total.oil = ((production.oil ?? 0) - ((left.oil ?? 0) + (right.oil ?? 0)));
  total.sulfur = ((production.sulfur ?? 0) - ((left.sulfur ?? 0) + (right.sulfur ?? 0)));

  return [
    total,
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
