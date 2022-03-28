import { players } from "../constants/players";

export const hasGameStarted = (game) =>
  Object.keys(players).some((player) => game.players[player].name !== "");
