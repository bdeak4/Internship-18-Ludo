import { useContext } from "react";
import { GameContext } from ".";

export const useGame = () => {
  const { game, setGame } = useContext(GameContext);

  return [game, setGame];
};
