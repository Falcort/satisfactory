import { FactoryLineType, ProductionLineType } from '../types';

export const RightFactoryLine: FactoryLineType[] = [
  {
    name: 'File eletrique',
    copper: 15,
  },
  {
    name: 'Cables',
    copper: 30
  },
  {
    name: 'Tole de cuivre',
    copper: 20
  },
  {
    name: 'Cristal de quartz',
    quartz: 37.5
  },
  {
    name: 'Tuyau en acier',
    iron: 30,
    coal: 30,
  },
  {
    name: 'Poutre en acier',
    iron: 60,
    coal: 60,
  },
  {
    name: 'Poutre en beton arme',
    iron: 72,
    coal: 72,
    limestone: 108,
  },
  {
    name: 'E.M.E reanime',
    eme: 120,
  },
  {
    name: 'Silice',
    quartz: 22.5,
  },
  {
    name: 'Filactif',
    caterium: 36,
  },
  {
    name: 'Stator',
    iron: 22.5,
    copper: 20,
    coal: 22.5,
  },
  {
    name: 'Moteur',
    iron: 157.5,
    copper: 40,
    coal: 45,
  },
  {
    name: 'TurboCarburant + Plastique + Caoutchouc',
    coal: 26.8,
    oil: 120,
    sulfur: 26.8,
  },
  {
    name: 'Moteur modulaire',
    iron: 145.5,
    copper: 16,
    coal: 18,
    oil: 22.5,
  }
];

export const LeftFactoryLine: FactoryLineType[] = [
  {
    name: 'Beton',
    limestone: 45,
  },
  {
    name: 'Plaque de fer',
    iron: 30,
  },
  {
    name: 'Barre de fer',
    iron: 15,
  },
  {
    name: 'Vis',
    iron: 12.5,
  },
  {
    name: 'Plaque de fer renforcer',
    iron: 60,
  },
  {
    name: 'Rotor',
    iron: 45,
  },
  {
    name: 'Plaquage inteligent',
    iron: 46.5,
  },
  {
    name: 'Cadre modulaire',
    iron: 48,
  },
  {
    name: 'Controller d\'IA',
    copper: 50,
    caterium: 60,
  },
  {
    name: 'Structure polyvalante',
    iron: 15+16.88+16.88+11.25+40+40+40,
    coal: 40+40+40
  },
  {
    name: 'Cablage automtiser',
    iron: 11.25,
    copper: 60,
    coal: 11.25
  },
  {
    name: 'Unité de contrôle adaptative',
    caterium: 16.8,
    copper: 70,
    iron: 232.5,
    coal: 90,
  }
];

export const ProductionLine: ProductionLineType[] = [
  {
    name: 'Base de debut - 1',
    level: 2,
    iron: 240,
  },
  {
    name: 'Base de debut - 2',
    level: 2,
    iron: 240,
  },
  {
    name: 'Base de debut - 3',
    level: 2,
    iron: 240,
  },
  {
    name: 'Base de debut - 4',
    level: 2,
    iron: 240,
  },
  {
    name: 'Base de debut Dermi',
    level: 2,
    copper: 480,
  },
  {
    name: 'Entree de la base',
    level: 2,
    limestone: 240,
  },
  {
    name: 'Droite du debut',
    level: 2,
    limestone: 240,
  },
  {
    name: 'Lagoon - 1',
    level: 0,
    oil: 60,
  },
  {
    name: 'Lagoon - 2',
    level: 0,
    oil: 60,
  },
  {
    name: 'Lagoon - 3',
    level: 0,
    oil: 120,
  },
  {
    name: 'Grotte - 1',
    level: 2,
    quartz: 240,
  },
  {
    name: 'Grotte - 2',
    level: 2,
    quartz: 240,
  },
  {
    name: 'Grotte - 3',
    level: 2,
    eme: 300,
  },
  {
    name: 'Tres loin vertical Raiju - 1',
    level: 2,
    coal: 240,
  },
  {
    name: 'Tres loin vertical Raiju - 2',
    level: 2,
    coal: 240,
  },
  {
    name: 'Desert Dermi - 1',
    level: 0,
    oil: 60,
  },
  {
    name: 'Desert Dermi - 2',
    level: 0,
    oil: 60,
  },
  {
    name: 'Desert Dermi - 3',
    level: 0,
    oil: 120,
  },
  {
    name: 'Desert Dermi - 4',
    level: 0,
    oil: 120,
  },
  {
    name: 'Dermi brume - 1',
    level: 2,
    sulfur: 150,
  },
  {
    name: 'Dermi brume - 2',
    level: 2,
    caterium: 300,
  },
  {
    name: 'Dermi hors radar - 1',
    level: 2,
    coal: 240,
  },
  {
    name: 'Dermi hors radar - 2',
    level: 2,
    coal: 240,
  },
  {
    name: 'Dermi hors radar - 3',
    level: 2,
    coal: 240,
  },
  {
    name: 'Dermi hors radar - 4',
    level: 2,
    coal: 120,
  },
  ,
  {
    name: 'Dermi loin bauxite',
    level: 2,
    bauxite: 480,
  }
];
