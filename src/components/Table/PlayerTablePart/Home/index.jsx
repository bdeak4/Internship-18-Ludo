import { useDice, usePlayer } from "providers/game/hooks";
import Token from "components/Table/Token";
import { HomeWrapper, TokensWrapper, TokenWrapper } from "./styled";
import { incrementTokenPosition } from "utils/player";
import { tokenHomePosition } from "constants/players";
import { initialDiceState } from "constants/game";

const Home = ({ player }) => {
  const [playerData, setPlayerData] = usePlayer(player);
  const [dice, setDice] = useDice();

  const handleClick = (tokenIndex) => {
    incrementTokenPosition(setPlayerData, tokenIndex, 1);
    setDice(initialDiceState);
  };

  return (
    <HomeWrapper player={player}>
      <TokensWrapper>
        {playerData.tokens.map((token, i) => (
          <TokenWrapper player={player} key={i}>
            {token.position === tokenHomePosition && (
              <Token
                player={player}
                onClick={() => handleClick(i)}
                clickable={playerData.active && dice !== initialDiceState}
                // clickable={playerData.active && dice === 6}
              />
            )}
          </TokenWrapper>
        ))}
      </TokensWrapper>
    </HomeWrapper>
  );
};

export default Home;
