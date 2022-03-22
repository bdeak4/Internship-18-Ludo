import React, { useContext } from "react";
import { GameContext } from "../../providers/game";

const Table = () => {
  const { game } = useContext(GameContext);

  return (
    <div>
      table
      <pre>{JSON.stringify(game)}</pre>
    </div>
  );
};

export default Table;
