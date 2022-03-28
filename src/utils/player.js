import { players } from "../constants/players";

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

export const updatePlayerProperty = (setGame, player, property, value) => {
  setGame((prev) => ({
    ...prev,
    players: {
      ...prev.players,
      [player]: {
        ...prev.players[player],
        [property]: value,
      },
    },
  }));
};
