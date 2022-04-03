import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const TokenButton = styled.button`
  width: 60%;
  height: 60%;
  margin: 20%;
  background-color: ${({ player, hasMutedColor }) =>
    !hasMutedColor ? getPlayerColor(player) : "#ffffff80"};
  color: #fff;
  transform: rotate(${({ textRotation }) => textRotation}deg);
  border-radius: 100%;
  border: 0;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "not-allowed")};
  animation: ${({ clickable }) => clickable && "pulse 1s ease-out infinite"};
`;
