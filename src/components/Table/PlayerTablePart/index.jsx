import { useContext } from "react";
import { customStyles } from "./customStyles";
import { Cells, PlayerTablePartWrapper } from "./styled";
import { GameContext } from "../../../providers/game";
import Cell from "./Cell";
import Home from "./Home";

const PlayerTablePart = ({ player }) => {
  const { game } = useContext(GameContext);

  return (
    <PlayerTablePartWrapper style={customStyles[player]}>
      <Cells>
        {new Array(18).fill(0).map((_, i) => (
          <Cell
            isParking={i >= 7 && i <= 11}
            isSpawn={i === 13}
            player={player}
            key={i}
          />
        ))}
      </Cells>
      <Home player={player} />
    </PlayerTablePartWrapper>
  );
};

export default PlayerTablePart;
