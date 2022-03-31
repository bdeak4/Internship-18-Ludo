import { customStyles } from "./customStyles";
import { Cells, PlayerTablePartWrapper } from "./styled";
import Cell from "./Cell";
import Home from "./Home";
import { isParkingCell, isSpawnCell } from "utils/cell";

const PlayerTablePart = ({ player }) => {
  return (
    <PlayerTablePartWrapper style={customStyles[player]}>
      <Cells>
        {new Array(18).fill(0).map((_, i) => (
          <Cell
            isParking={isParkingCell(i)}
            isSpawn={isSpawnCell(i)}
            player={player}
            index={i}
            key={i}
          />
        ))}
      </Cells>
      <Home player={player} />
    </PlayerTablePartWrapper>
  );
};

export default PlayerTablePart;
