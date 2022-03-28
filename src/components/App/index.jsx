import { useGame } from "../../providers/game/hooks";
import { hasGameStarted } from "../../utils/form";
import Form from "../Form";
import Table from "../Table";

const App = () => {
  const [game] = useGame();

  return hasGameStarted(game) ? <Table /> : <Form />;
};

export default App;
