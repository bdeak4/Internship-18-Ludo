import { useState } from "react";
import { players } from "constants/players";
import { getPlayerColor } from "utils/player";
import { capitalize } from "utils/text";
import {
  PlayerForm,
  PlayerFormFooter,
  PlayerFormHeading,
  PlayerInput,
  PlayerSubmit,
} from "./styled";

const Form = ({ startGame }) => {
  const [playerNames, setPlayerNames] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const names = Object.values(playerNames).filter((name) => name !== "");

    if (!names.length) {
      setError("Can't start game without players");
      return;
    }

    if (names.some((name, i) => names.indexOf(name) !== i)) {
      setError("Multiple players can't have same name");
      return;
    }

    startGame(playerNames);
  };

  return (
    <PlayerForm onSubmit={handleSubmit}>
      <PlayerFormHeading color={getPlayerColor(Object.keys(players)[0])}>
        <h1>Welcome to Ludo!</h1>
        <p>Enter only active player names</p>
      </PlayerFormHeading>

      {Object.keys(players).map((player, i) => {
        return (
          <PlayerInput player={player} key={player}>
            <input
              type="text"
              placeholder={`${capitalize(player)} player name`}
              value={playerNames[player] || ""}
              onChange={(e) =>
                setPlayerNames((prev) => ({
                  ...prev,
                  [player]: e.target.value,
                }))
              }
              autoFocus={i === 0}
            />
          </PlayerInput>
        );
      })}

      <PlayerFormFooter color={getPlayerColor(Object.keys(players).pop())}>
        <PlayerSubmit type="submit">Start game</PlayerSubmit>
        {error && <p>{error}</p>}
      </PlayerFormFooter>
    </PlayerForm>
  );
};

export default Form;
