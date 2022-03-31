import {
  parkingEndRelativeIndex,
  parkingStartRelativeIndex,
  spawnRelativeIndex,
  tokenPath,
} from "constants/cell";
import { players } from "constants/players";

export const isSpawnCell = (relativeIndex) =>
  relativeIndex === spawnRelativeIndex;

export const isParkingCell = (relativeIndex) =>
  relativeIndex >= parkingStartRelativeIndex &&
  relativeIndex <= parkingEndRelativeIndex;

export const getPlayerTablePartOffset = (player, tablePart) => {
  const playerList = [...Object.values(players), ...Object.values(players)];

  const playerIndex = playerList.indexOf(player);

  const translatedPlayerList = playerList.slice(playerIndex, playerIndex + 4);

  return translatedPlayerList.indexOf(tablePart);
};

export const getPlayerTokenByCell = (game, tablePart, relativeIndex) => {
  for (let player of Object.values(players)) {
    const playerData = game.players[player];

    for (let [tokenIndex, token] of playerData.tokens.entries()) {
      if (token.position === -1) {
        continue;
      }

      const relativeCoordinates = tokenPath[token.position];
      const tablePartIndex = getPlayerTablePartOffset(player, tablePart);

      if (
        relativeCoordinates[0] === tablePartIndex &&
        relativeCoordinates[1] === relativeIndex
      ) {
        return [player, tokenIndex];
      }
    }
  }
  return [false, 0];
};
