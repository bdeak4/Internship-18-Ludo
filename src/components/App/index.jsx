import { useGame, useMessage } from "providers/game/hooks";
import { getActivePlayers } from "utils/game";
import Form from "components/Form";
import Table from "components/Table";
import { random } from "../../utils/common";
import { updatePlayer } from "../../utils/player";
import ScoreBoard from "components/ScoreBoard";
import Message from "components/Message";
import { useEffect } from "react";
import { initialTokenState, players } from "constants/players";
import { parkingStartAbsoluteIndex } from "constants/cell";
import { initialMessageState } from "constants/game";
import { useState } from "react";

const App = () => {
  const [game, setGame] = useGame();
  const [, setMessage] = useMessage();
  const [winLock, setWinLock] = useState(false);

  const startGame = (playerNames) => {
    const players = Object.keys(playerNames);

    players.forEach((player) => {
      updatePlayer(setGame, player, {
        name: playerNames[player],
        disabled: false,
      });
    });

    updatePlayer(setGame, random(players), {
      active: true,
    });
  };

  const winGame = (player) => {
    setMessage(`${game.players[player].name} won. Next round starting in 2s`);

    updatePlayer(setGame, player, { score: game.players[player].score + 1 });

    setTimeout(() => {
      Object.keys(players).forEach((p) => {
        updatePlayer(setGame, p, {
          tokens: initialTokenState,
        });
      });

      setMessage(initialMessageState);
      setWinLock(false);
    }, 2000);
  };

  useEffect(() => {
    Object.keys(players).forEach((player) => {
      const areTokensFinished = game.players[player].tokens.every(
        (t) => t.position >= parkingStartAbsoluteIndex
      );
      if (areTokensFinished && !winLock) {
        setWinLock(true);
        winGame(player);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.players]);

  return getActivePlayers(game).length ? (
    <>
      <Table />
      <ScoreBoard />
      <Message />
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </>
  ) : (
    <Form startGame={startGame} />
  );
};

export default App;
