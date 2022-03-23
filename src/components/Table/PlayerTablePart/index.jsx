import { customStyles } from "./customStyles";
import { PlayerTablePartWrapper } from "./styled";

const PlayerTablePart = ({ player }) => {
  return (
    <PlayerTablePartWrapper style={customStyles[player]}>
      {player}
    </PlayerTablePartWrapper>
  );
};

export default PlayerTablePart;
