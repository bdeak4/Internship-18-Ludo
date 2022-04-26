import { useContext } from "react";
import { GameContext } from ".";

import { initialDiceState, initialMessageState } from "constants/game";
import { updatePlayer } from "utils/player";

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
  const [, setMessage] = useMessage();

  const nextPlayer = () => {
    const activePlayerIndex = Object.values(game.players).findIndex(
      (p) => p.active
    );
    let nextPlayerIndex = Object.values(game.players)
      .slice(activePlayerIndex + 1)
      .findIndex((p) => !p.disabled);

    if (nextPlayerIndex === -1) {
      nextPlayerIndex = Object.values(game.players).findIndex(
        (p) => !p.disabled
      );
    } else {
      nextPlayerIndex += activePlayerIndex + 1;
    }

    const playerKeys = Object.keys(game.players).filter((p) => !p.disabled);

    updatePlayer(setGame, playerKeys[activePlayerIndex], () => ({
      active: false,
    }));
    updatePlayer(setGame, playerKeys[nextPlayerIndex], () => ({
      active: true,
    }));
    setDice(initialDiceState);
    setMessage(initialMessageState);
  };

  return { nextPlayer };
};

export const useMessage = () => {
  const [game, setGame] = useGame();

  const setMessage = (newMessage) => {
    setGame((prev) => ({ ...prev, message: newMessage }));
  };

  return [game.message, setMessage];
};
