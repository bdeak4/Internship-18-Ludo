import {
  useDice,
  useGame,
  useNextPlayer,
  usePlayer,
} from "providers/game/hooks";

import Token from "components/Table/Token";

import { parkingEndAbsoluteIndex } from "constants/cell";
import { initialDiceState } from "constants/game";
import { getPlayerTokenByCell } from "utils/cell";
import { movePlayer, getTextRotation } from "utils/player";

import { CellWrapper } from "./styled";

const Cell = ({ player, isParking, isSpawn, index }) => {
  const [game, setGame] = useGame();
  const [token, tokenIndex] = getPlayerTokenByCell(game, player, index);
  const [playerData] = usePlayer(token);
  const [dice, setDice] = useDice();
  const { nextPlayer } = useNextPlayer();

  const handleClick = () => {
    movePlayer(setGame, game, token, tokenIndex, dice);

    if (dice !== 6) {
      nextPlayer();
    } else {
      setDice(initialDiceState);
    }
  };

  const outOfBounds =
    token &&
    playerData.tokens[tokenIndex].position + dice > parkingEndAbsoluteIndex;

  return (
    <CellWrapper player={player} isBlank={!isParking && !isSpawn}>
      {token && (
        <Token
          player={token}
          hasMutedColor={(isParking || isSpawn) && token === player}
          onClick={handleClick}
          clickable={
            playerData.active && dice !== initialDiceState && !outOfBounds
          }
          tokenCount={
            playerData.tokens.filter(
              (t) => t.position === playerData.tokens[tokenIndex].position
            ).length
          }
          textRotation={getTextRotation(player)}
        />
      )}
    </CellWrapper>
  );
};

export default Cell;
