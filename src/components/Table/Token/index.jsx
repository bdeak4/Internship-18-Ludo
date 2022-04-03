import { TokenButton } from "./styled";

const Token = ({
  player,
  onClick,
  clickable,
  hasMutedColor,
  tokenCount,
  textRotation = 0,
}) => {
  return (
    <TokenButton
      player={player}
      onClick={onClick}
      clickable={clickable}
      disabled={!clickable}
      hasMutedColor={hasMutedColor}
      textRotation={textRotation}
    >
      {tokenCount > 1 && tokenCount}
    </TokenButton>
  );
};

export default Token;
