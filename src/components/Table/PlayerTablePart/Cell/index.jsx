import { CellWrapper } from "./styled";

const Cell = ({ player, isParking, isSpawn }) => {
  return (
    <CellWrapper player={player} isBlank={!isParking && !isSpawn}></CellWrapper>
  );
};

export default Cell;
