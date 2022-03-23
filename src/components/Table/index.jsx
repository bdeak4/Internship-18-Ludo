import React, { useContext } from "react";
import { players } from "../../constants/players";
import { GameContext } from "../../providers/game";
import PlayerTablePart from "./PlayerTablePart";
import { TableElement } from "./styled";
import TableCenter from "./TableCenter";

const Table = () => {
  const { game } = useContext(GameContext);

  return (
    <TableElement>
      {Object.keys(players).map((player) => {
        return <PlayerTablePart player={player} key={player} />;
      })}
      <TableCenter />
    </TableElement>
  );
};

export default Table;
