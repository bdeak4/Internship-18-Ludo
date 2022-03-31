import { players } from "constants/players";
import DiceRoller from "../DiceRoller";
import {
  PlayerTableCenter,
  TableCenterWrapper,
  TableCenterRotated,
} from "./styled";

const TableCenter = () => {
  return (
    <TableCenterWrapper>
      <TableCenterRotated>
        <PlayerTableCenter player={players.green} />
        <PlayerTableCenter player={players.yellow} />
        <PlayerTableCenter player={players.red} />
        <PlayerTableCenter player={players.blue} />
      </TableCenterRotated>
      <DiceRoller />
    </TableCenterWrapper>
  );
};

export default TableCenter;
