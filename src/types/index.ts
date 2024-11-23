export type MineralsType = {
  iron?: number;
  copper?: number;
  coal?: number;
  limestone?: number;
  eme?: number;
  quartz?: number;
  caterium?: number;
  oil?: number;
  sulfur?: number;
}

export type FactoryLineType = MineralsType & {
  name: string;
  enable?: string;
}

export type ProductionLineType = Omit<FactoryLineType, 'enable'> & {
  level: number;
}
