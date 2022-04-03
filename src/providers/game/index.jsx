import { createContext, useState, useEffect } from "react";
import { initialGameState } from "constants/game";

export const GameContext = createContext(initialGameState);

const GameProvider = ({ children }) => {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("game")) || initialGameState
  );

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(game));
  }, [game]);

  const value = {
    game,
    setGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
