import { useContext } from "react";
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
