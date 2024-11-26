import { VtDataTableHeader } from 'vuetella';
export const MinerHeaders: VtDataTableHeader[] = [
  {
    label: 'Fer',
    key: 'iron',
  },
  {
    label: 'Cuivre',
    key: 'copper',
  },
  {
    label: 'Charbon',
    key: 'coal',
  },
  {
    label: 'Calcaire',
    key: 'limestone',
  },
  {
    label: 'E.M.E',
    key: 'eme',
  },
  {
    label: 'Quartz',
    key: 'quartz',
  },
  {
    label: 'Caterium',
    key: 'caterium',
  },
  {
    label: 'Pétrole',
    key: 'oil',
  },
  {
    label: 'Soufre',
    key: 'sulfur',
  },
  {
    label: 'Bauxite',
    key: 'bauxite',
  }
]
export const FactoryLineHeaders: VtDataTableHeader[] = [
  {
    label: 'Nom',
    key: 'name',
  },
  ...MinerHeaders,
]
