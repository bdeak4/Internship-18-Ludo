import {
  parkingEndRelativeIndex,
  parkingStartRelativeIndex,
  spawnRelativeIndex,
} from "../constants/cell";

export const isSpawnCell = (relativeIndex) =>
  relativeIndex === spawnRelativeIndex;

export const isParkingCell = (relativeIndex) =>
  relativeIndex >= parkingStartRelativeIndex &&
  relativeIndex <= parkingEndRelativeIndex;
