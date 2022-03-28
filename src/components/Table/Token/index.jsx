import { TokenButton } from "./styled";

const Token = ({ player, onClick, disabled }) => {
  return (
    <TokenButton
      player={player}
      onClick={onClick}
      disabled={disabled}
    ></TokenButton>
  );
};

export default Token;
