import React, { useContext } from "react";
import { GameContext } from "../../providers/game";
import { TableElement } from "./styled";

const Table = () => {
  const { game } = useContext(GameContext);

  return (
    <TableElement>
      <div className="player-home ph0">ph0</div>
      <div className="player-home ph1">ph1</div>
      <div className="player-home ph2">ph2</div>
      <div className="player-home ph3">ph3</div>
      <div className="center">center</div>
    </TableElement>
  );
};

export default Table;
