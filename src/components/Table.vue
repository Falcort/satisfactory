<template>
  <VtDataTable :title="props.title" :headers="props.headers" :data="parsedData">
    <template #[`item.name`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.name }}</span>
      </template>
      <template v-else>
        {{ row.name }}
      </template>
    </template>

    <template #[`item.iron`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.iron }}</span>
      </template>
      <template v-else>
        {{ row.iron }}
      </template>
    </template>

    <template #[`item.copper`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.copper }}</span>
      </template>
      <template v-else>
        {{ row.copper }}
      </template>
    </template>

    <template #[`item.coal`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.coal }}</span>
      </template>
      <template v-else>
        {{ row.coal }}
      </template>
    </template>

    <template #[`item.limestone`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.limestone }}</span>
      </template>
      <template v-else>
        {{ row.limestone }}
      </template>
    </template>

    <template #[`item.eme`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.eme }}</span>
      </template>
      <template v-else>
        {{ row.eme }}
      </template>
    </template>

    <template #[`item.quartz`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.quartz }}</span>
      </template>
      <template v-else>
        {{ row.quartz }}
      </template>
    </template>

    <template #[`item.caterium`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.caterium }}</span>
      </template>
      <template v-else>
        {{ row.caterium }}
      </template>
    </template>

    <template #[`item.oil`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.oil }}</span>
      </template>
      <template v-else>
        {{ row.oil }}
      </template>
    </template>

    <template #[`item.sulfur`]="{ row }">
      <template v-if="row.name === 'Total'">
        <span class="bold">{{ row.sulfur }}</span>
      </template>
      <template v-else>
        {{ row.sulfur }}
      </template>
    </template>
  </VtDataTable>
</template>

<script setup lang="ts">
import { VtDataTable, VtDataTableHeader } from 'vuetella';
import { computed } from 'vue';
import { FactoryLineType } from '../types.ts';

export type TableProps = {
  title: string;
  headers: VtDataTableHeader[];
  data: any[];
};

const props = defineProps<TableProps>();

const parsedData = computed(() => {
  const total: FactoryLineType = {
    name: 'Total',
  };

  props.data.forEach((row) => {
    total.iron = (total.iron ?? 0) + (row.iron ?? 0);
    total.copper = (total.copper ?? 0) + (row.copper ?? 0);
    total.coal = (total.coal ?? 0) + (row.coal ?? 0);
    total.limestone = (total.limestone ?? 0) + (row.limestone ?? 0);
    total.eme = (total.eme ?? 0) + (row.eme ?? 0);
    total.quartz = (total.quartz ?? 0) + (row.quartz ?? 0);
    total.caterium = (total.caterium ?? 0) + (row.caterium ?? 0);
    total.oil = (total.oil ?? 0) + (row.oil ?? 0);
    total.sulfur = (total.sulfur ?? 0) + (row.sulfur ?? 0);
  });

  return [
    ...props.data,
    total,
  ]
});
</script>

<style lang="scss">
.bold {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
