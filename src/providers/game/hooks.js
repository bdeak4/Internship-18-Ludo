import { initialDiceState } from "constants/game";
import { useContext } from "react";
import { updatePlayer } from "utils/player";
import { GameContext } from ".";

export const useGame = () => {
  const { game, setGame } = useContext(GameContext);

  return [game, setGame];
};

export const usePlayer = (player) => {
  const [game, setGame] = useGame();

  const setPlayer = (newPlayer) => {
    setGame((prev) => ({
      ...prev,
      players: {
        ...prev.players,
        [player]:
          newPlayer instanceof Function
            ? newPlayer(prev.players[player])
            : newPlayer,
      },
    }));
  };

  return [game.players[player], setPlayer];
};

export const useActivePlayer = () => {
  const [game] = useGame();

  for (let player in game.players) {
    if (!game.players[player].active) {
      continue;
    }
    return player;
  }
  return "";
};

export const useDice = () => {
  const [game, setGame] = useGame();

  const setDice = (newDice) => {
    setGame((prev) => ({ ...prev, dice: newDice }));
  };

  return [game.dice, setDice];
};

export const useNextPlayer = () => {
  const [game, setGame] = useGame();
  const [, setDice] = useDice();

  const nextPlayer = () => {
    const playerKeys = Object.keys(game.players).filter((p) => !p.disabled);
    const playerValues = Object.values(game.players).filter((p) => !p.disabled);
    const activePlayerIndex = playerValues.findIndex((p) => p.active);
    const nextPlayerIndex =
      playerValues.length - 1 > activePlayerIndex ? activePlayerIndex + 1 : 0;

    updatePlayer(setGame, playerKeys[activePlayerIndex], { active: false });
    updatePlayer(setGame, playerKeys[nextPlayerIndex], { active: true });
    setDice(initialDiceState);
  };

  return { nextPlayer };
};
