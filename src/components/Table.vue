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
import { getTotal } from '../controllers';

export type TableProps = {
  title: string;
  headers: VtDataTableHeader[];
  data: any[];
};

const props = defineProps<TableProps>();

const parsedData = computed(() => {
  return [
    ...props.data,
    getTotal('Total', props.data),
  ]
});
</script>

<style lang="scss">
.bold {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
