import { createContext, useState } from "react";
import { initialGameState } from "constants/game";

export const GameContext = createContext(initialGameState);

const GameProvider = ({ children }) => {
  const [game, setGame] = useState(initialGameState);

  const value = {
    game,
    setGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
