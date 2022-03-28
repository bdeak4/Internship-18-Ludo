import { useGame } from "providers/game/hooks";
import { getActivePlayers } from "utils/game";
import Form from "components/Form";
import Table from "components/Table";

const App = () => {
  const [game, setGame] = useGame();

  const startGame = (playerNames) => {
    Object.keys(playerNames).forEach((player) => {
      setGame((prev) => ({
        ...prev,
        players: {
          ...prev.players,
          [player]: {
            ...prev.players[player],
            name: playerNames[player],
            disabled: false,
          },
        },
      }));
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
