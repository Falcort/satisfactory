import { FactoryLineType } from '../types';

export function getTotal(title: string, data: FactoryLineType[]): FactoryLineType {

  const total: FactoryLineType = {
    name: title,
  };

  data.forEach((line) => {
    total.iron = (total.iron ?? 0) + (line.iron ?? 0);
    total.copper = (total.copper ?? 0) + (line.copper ?? 0);
    total.coal = (total.coal ?? 0) + (line.coal ?? 0);
    total.limestone = (total.limestone ?? 0) + (line.limestone ?? 0);
    total.eme = (total.eme ?? 0) + (line.eme ?? 0);
    total.quartz = (total.quartz ?? 0) + (line.quartz ?? 0);
    total.caterium = (total.caterium ?? 0) + (line.caterium ?? 0);
    total.oil = (total.oil ?? 0) + (line.oil ?? 0);
    total.sulfur = (total.sulfur ?? 0) + (line.sulfur ?? 0);
    total.bauxite = (total.bauxite ?? 0) + (line.bauxite ?? 0);
  });

  return total;
}

export function getDifference(input: FactoryLineType[], output: FactoryLineType[]): FactoryLineType {
  const totalInput = getTotal('Input', input);
  const totalOutput = getTotal('Output', output);



  return {
    name: 'Difference',
    iron: (totalOutput.iron ?? 0) - (totalInput.iron ?? 0),
    copper: (totalOutput.copper ?? 0) - (totalInput.copper ?? 0),
    coal: (totalOutput.coal ?? 0) - (totalInput.coal ?? 0),
    limestone: (totalOutput.limestone ?? 0) - (totalInput.limestone ?? 0),
    eme: (totalOutput.eme ?? 0) - (totalInput.eme ?? 0),
    quartz: (totalOutput.quartz ?? 0) - (totalInput.quartz ?? 0),
    caterium: (totalOutput.caterium ?? 0) - (totalInput.caterium ?? 0),
    oil: (totalOutput.oil ?? 0) - (totalInput.oil ?? 0),
    sulfur: (totalOutput.sulfur ?? 0) - (totalInput.sulfur ?? 0),
    bauxite: (totalOutput.bauxite ?? 0) - (totalInput.bauxite ?? 0),
  };
}
