export const spawnRelativeIndex = 13;
export const parkingStartRelativeIndex = 7;
export const parkingEndRelativeIndex = 11;

export const tokenPath = [
  [0, 13],
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
  [0, 7],
  [0, 8],
  [0, 9],
  [0, 10],
  [0, 11],
];

function getForeignTablePartPath(index) {
  return [
    [index, 5],
    [index, 4],
    [index, 3],
    [index, 2],
    [index, 1],
    [index, 0],
    [index, 6],
    [index, 12],
    [index, 13],
    [index, 14],
    [index, 15],
    [index, 16],
    [index, 17],
  ];
}
