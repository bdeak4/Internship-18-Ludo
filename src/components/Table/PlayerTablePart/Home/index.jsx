import { usePlayer } from "providers/game/hooks";
import Token from "components/Table/Token";
import { HomeWrapper, TokensWrapper, TokenWrapper } from "./styled";
import { incrementTokenPosition } from "utils/player";

const Home = ({ player }) => {
  const [playerData, setPlayerData] = usePlayer(player);

  return (
    <HomeWrapper player={player}>
      <TokensWrapper>
        {playerData.tokens.map((token, i) => (
          <TokenWrapper player={player} key={i}>
            {token.position === -1 && (
              <Token
                player={player}
                onClick={() => incrementTokenPosition(setPlayerData, i, 1)}
                disabled={playerData.disabled}
              />
            )}
          </TokenWrapper>
        ))}
      </TokensWrapper>
    </HomeWrapper>
  );
};

export default Home;
