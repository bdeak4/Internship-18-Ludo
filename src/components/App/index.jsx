import { useGame } from "../../providers/game/hooks";
import { getActivePlayers } from "../../utils/game";
import { updatePlayerProperty } from "../../utils/player";
import Form from "../Form";
import Table from "../Table";

const App = () => {
  const [game, setGame] = useGame();

  const startGame = (playerNames) => {
    Object.keys(playerNames).forEach((player) => {
      updatePlayerProperty(setGame, player, "name", playerNames[player]);
    });
  };

  return getActivePlayers(game).length ? (
    <Table />
  ) : (
    <Form startGame={startGame} />
  );
};

export default App;
