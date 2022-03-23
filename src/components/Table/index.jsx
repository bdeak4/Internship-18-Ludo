import React from "react";
import { players } from "../../constants/players";
import PlayerTablePart from "./PlayerTablePart";
import { TableWrapper } from "./styled";
import TableCenter from "./TableCenter";

const Table = () => {
  return (
    <TableWrapper>
      {Object.keys(players).map((player) => {
        return <PlayerTablePart player={player} key={player} />;
      })}
      <TableCenter />
    </TableWrapper>
  );
};

export default Table;
