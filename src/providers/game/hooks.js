import { useContext } from "react";
import { GameContext } from ".";

export const useGame = () => {
  const { game, setGame } = useContext(GameContext);

  return [game, setGame];
};

export const usePlayer = (player) => {
  const { game, setGame } = useContext(GameContext);

  const setPlayer = (newPlayer) => {
    setGame((prev) => ({
      ...prev,
      players: {
        ...prev.players,
        [player]: newPlayer instanceof Function ? newPlayer(prev) : newPlayer,
      },
    }));
  };

  return [game.players[player], setPlayer];
};
