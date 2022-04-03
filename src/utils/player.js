import { parkingEndAbsoluteIndex, tokenPath } from "constants/cell";
import { players, tokenHomePosition } from "constants/players";
import { getPlayerTokenByCell, getTablePartByOffset } from "./cell";

export const getPlayerColor = (player) => {
  switch (player) {
    case players.blue:
      return "#0EA5E9";

    case players.red:
      return "#DC2626";

    case players.green:
      return "#16A34A";

    case players.yellow:
      return "#EAB308";

    default:
      return "transparent";
  }
};

export const getTextRotation = (player) => {
  switch (player) {
    case players.blue:
      return 270;

    case players.red:
      return 180;

    case players.green:
      return 90;

    case players.yellow:
      return 0;

    default:
      return 0;
  }
};

export const updatePlayer = (setGame, player, updatedProperties) => {
  setGame((prev) => ({
    ...prev,
    players: {
      ...prev.players,
      [player]: {
        ...prev.players[player],
        ...updatedProperties(prev.players[player]),
      },
    },
  }));
};

export const hasPossibleActions = (game, player) => {
  return game.players[player].tokens.some((t) => {
    if (t.position === tokenHomePosition) {
      return game.dice === 6;
    }

    if (t.position + game.dice <= parkingEndAbsoluteIndex) {
      return true;
    }

    return false;
  });
};

export const movePlayer = (
  setGame,
  game,
  player,
  tokenIndex,
  increment = 0
) => {
  const position = game.players[player].tokens[tokenIndex].position + increment;
  const [tablePartOffset, relativeIndex] = tokenPath[position];

  const tablePart = getTablePartByOffset(player, tablePartOffset);

  const [existingPlayer, existingTokenIndex] = getPlayerTokenByCell(
    game,
    tablePart,
    relativeIndex
  );

  if (existingPlayer && existingPlayer !== player) {
    updatePlayer(setGame, existingPlayer, (prev) => ({
      tokens: prev.tokens.map(({ position }, i) => ({
        position: i === existingTokenIndex ? -1 : position,
      })),
    }));
  }

  updatePlayer(setGame, player, (prev) => ({
    tokens: prev.tokens.map(({ position }, i) => ({
      position: i === tokenIndex ? position + increment : position,
    })),
  }));
};
