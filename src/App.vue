<template>
  <VtThemeProvider :theme="VtTheme">
    <div class="grid divided">
      <Table title="Usine de gauche" :headers="FactoryLineHeaders" :data="LeftFactoryLine" />
      <Table title="Usine de droite" :headers="FactoryLineHeaders" :data="RightFactoryLine" />
    </div>
    <div class="grid">
      <CompleteFactory :left="LeftFactoryLine" :right="RightFactoryLine" />
      <Table title="Production" :headers="FactoryLineHeaders" :data="ProductionLine" />
      <DifferenceTable :left="LeftFactoryLine" :right="RightFactoryLine" :production="ProductionLine" />
    </div>
  </VtThemeProvider>
</template>

<script setup lang="ts">
import { VtThemeProvider, VtTheme } from 'vuetella';
import Table from './components/Table.vue';
import { FactoryLineHeaders } from './common.ts';
import { LeftFactoryLine, ProductionLine, RightFactoryLine } from './data.ts';
import CompleteFactory from './components/CompleteFactory.vue';
import DifferenceTable from './components/DifferenceTable.vue';
</script>


<style scoped lang="scss">
.divided {
  grid-template-columns: repeat(auto-fit, minmax(780px, 1fr));
}

.grid {
  display: grid;
  gap: 40px;
  column-gap: 40px;
  margin: 40px;
}
</style>
