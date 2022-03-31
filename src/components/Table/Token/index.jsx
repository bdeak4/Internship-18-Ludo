import { TokenButton } from "./styled";

const Token = ({ player, onClick, clickable, hasMutedColor }) => {
  return (
    <TokenButton
      player={player}
      onClick={onClick}
      clickable={clickable}
      disabled={!clickable}
      hasMutedColor={hasMutedColor}
    ></TokenButton>
  );
};

export default Token;
