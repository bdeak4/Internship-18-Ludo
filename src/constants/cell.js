export const spawnRelativeIndex = 13;
export const parkingStartRelativeIndex = 7;
export const parkingEndRelativeIndex = 11;

export const tokenPath = [
  [0, spawnRelativeIndex],
  [0, 14],
  [0, 15],
  [0, 16],
  [0, 17],
  ...getForeignTablePartPath(1),
  ...getForeignTablePartPath(2),
  ...getForeignTablePartPath(3),
  [0, 5],
  [0, 4],
  [0, 3],
  [0, 2],
  [0, 1],
  [0, 0],
  [0, 6],
  [0, parkingStartRelativeIndex],
  [0, 8],
  [0, 9],
  [0, 10],
  [0, parkingEndRelativeIndex],
];

function getForeignTablePartPath(tablePartIndex) {
  return [
    [tablePartIndex, 5],
    [tablePartIndex, 4],
    [tablePartIndex, 3],
    [tablePartIndex, 2],
    [tablePartIndex, 1],
    [tablePartIndex, 0],
    [tablePartIndex, 6],
    [tablePartIndex, 12],
    [tablePartIndex, 13],
    [tablePartIndex, 14],
    [tablePartIndex, 15],
    [tablePartIndex, 16],
    [tablePartIndex, 17],
  ];
}
