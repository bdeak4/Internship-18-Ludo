import { players } from "constants/players";

export const getActivePlayers = (game) =>
  Object.keys(players).filter((player) => game.players[player].name !== "");
