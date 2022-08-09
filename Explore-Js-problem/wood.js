/* 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 450 cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const chair = 3;
  const table = 10;
  const bed = 50;

  const chairWood = chairQuantity * chair;
  const tableWood = tableQuantity * table;
  const bedWood = bedQuantity * bed;

  return chairWood + tableWood + bedWood;
}

console.log(woodCalculator(1, 1, 1));
