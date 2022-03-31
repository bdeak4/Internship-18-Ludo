import Token from "components/Table/Token";
import { useGame, usePlayer } from "providers/game/hooks";
import { getPlayerTokenByCell } from "utils/cell";
import { incrementTokenPosition } from "utils/player";
import { CellWrapper } from "./styled";

const Cell = ({ player, isParking, isSpawn, index }) => {
  const [game] = useGame();
  const [token, tokenIndex] = getPlayerTokenByCell(game, player, index);
  const [, setPlayerData] = usePlayer(token);

  return (
    <CellWrapper player={player} isBlank={!isParking && !isSpawn}>
      {token && (
        <Token
          player={token}
          hasMutedColor={(isParking || isSpawn) && token === player}
          onClick={() => incrementTokenPosition(setPlayerData, tokenIndex, 1)}
          clickable={true}
        />
      )}
    </CellWrapper>
  );
};

export default Cell;
