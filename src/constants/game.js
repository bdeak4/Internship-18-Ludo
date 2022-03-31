import { initialPlayerState, players } from "./players";

export const initialDiceState = -1;

export const initialGameState = {
  players: {
    [players.blue]: initialPlayerState,
    [players.red]: initialPlayerState,
    [players.green]: initialPlayerState,
    [players.yellow]: initialPlayerState,
  },
  dice: initialDiceState,
};
