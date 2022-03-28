import { players } from "../../constants/players";

const Form = () => {
  return (
    <form>
      {Object.keys(players).map((player) => {
        return <div key={player}>{player}</div>;
      })}
    </form>
  );
};

export default Form;
