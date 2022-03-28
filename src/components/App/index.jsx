import { useGame } from "providers/game/hooks";
import { getActivePlayers } from "utils/game";
import Form from "components/Form";
import Table from "components/Table";
import { random } from "../../utils/common";
import { updatePlayer } from "../../utils/player";

const App = () => {
  const [game, setGame] = useGame();

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

  return getActivePlayers(game).length ? (
    <>
      <Table />
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </>
  ) : (
    <Form startGame={startGame} />
  );
};

export default App;
