import { useGame } from "../../providers/game/hooks";
import { getActivePlayers } from "../../utils/game";
import Form from "../Form";
import Table from "../Table";

const App = () => {
  const [game] = useGame();

  return getActivePlayers(game).length ? <Table /> : <Form />;
};

export default App;
