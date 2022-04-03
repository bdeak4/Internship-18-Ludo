import { useGame } from "providers/game/hooks";

import { parkingStartAbsoluteIndex } from "constants/cell";
import { initialGameState } from "constants/game";
import { players } from "constants/players";

import {
  PlayerName,
  ResetButton,
  ScoreBoardPlayer,
  ScoreBoardWrapper,
} from "./styled";

const ScoreBoard = () => {
  const [game, setGame] = useGame();

  const playerList = Object.keys(players)
    .filter((p) => !game.players[p].disabled)
    .map((p) => ({ playerColor: p, player: game.players[p] }));

  const handleReset = () => {
    if (window.confirm("Are you sure?")) {
      setGame(initialGameState);
    }
  };

  return (
    <ScoreBoardWrapper>
      {playerList.map(({ playerColor, player }) => {
        const tokens = player.tokens;
        const tokensInHome = tokens.filter((t) => t.position === -1).length;
        const finishedTokens = tokens.filter(
          (t) => t.position >= parkingStartAbsoluteIndex
        ).length;

        return (
          <ScoreBoardPlayer player={playerColor} key={player.name}>
            <PlayerName>{player.name}</PlayerName>
            <div>
              <b>Points:</b> {player.tokens.reduce((a, b) => a + b.position, 4)}
            </div>
            <div>
              <b>Home:</b> {tokensInHome}
            </div>
            <div>
              <b>Active:</b> {tokens.length - tokensInHome - finishedTokens}
            </div>
            <div>
              <b>Finish:</b> {finishedTokens}
            </div>
            <div>
              <b>Wins:</b> {player.score}
            </div>
          </ScoreBoardPlayer>
        );
      })}
      <ResetButton onClick={handleReset}>Reset game</ResetButton>
    </ScoreBoardWrapper>
  );
};

export default ScoreBoard;
