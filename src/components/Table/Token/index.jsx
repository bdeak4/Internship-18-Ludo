import { TokenButton } from "./styled";

const Token = ({ player, onClick, clickable }) => {
  return (
    <TokenButton
      player={player}
      onClick={onClick}
      clickable={clickable}
      disabled={!clickable}
    ></TokenButton>
  );
};

export default Token;
