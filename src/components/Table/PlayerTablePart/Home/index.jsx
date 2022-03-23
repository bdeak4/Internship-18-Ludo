import { HomeWrapper, PlayersWrapper } from "./styled";

const Home = ({ player }) => {
  return (
    <HomeWrapper player={player}>
      <PlayersWrapper></PlayersWrapper>
    </HomeWrapper>
  );
};

export default Home;
