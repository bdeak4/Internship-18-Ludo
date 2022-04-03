import React from "react";

import TableCenter from "./TableCenter";
import PlayerTablePart from "./PlayerTablePart";

import { players } from "constants/players";

import { TableWrapper } from "./styled";

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
