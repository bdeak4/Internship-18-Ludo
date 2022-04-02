import Token from "components/Table/Token";
import { initialDiceState } from "constants/game";
import {
  useDice,
  useGame,
  useNextPlayer,
  usePlayer,
} from "providers/game/hooks";
import { getPlayerTokenByCell } from "utils/cell";
import { incrementTokenPosition } from "utils/player";
import { CellWrapper } from "./styled";

const Cell = ({ player, isParking, isSpawn, index }) => {
  const [game] = useGame();
  const [token, tokenIndex] = getPlayerTokenByCell(game, player, index);
  const [playerData, setPlayerData] = usePlayer(token);
  const [dice] = useDice();
  const { nextPlayer } = useNextPlayer();

  const handleClick = () => {
    incrementTokenPosition(setPlayerData, tokenIndex, dice);
    nextPlayer();
  };

  return (
    <CellWrapper player={player} isBlank={!isParking && !isSpawn}>
      {token && (
        <Token
          player={token}
          hasMutedColor={(isParking || isSpawn) && token === player}
          onClick={handleClick}
          clickable={
            playerData.active &&
            dice !== initialDiceState &&
            playerData.tokens[tokenIndex].position + dice <= 55
          }
        />
      )}
    </CellWrapper>
  );
};

export default Cell;
