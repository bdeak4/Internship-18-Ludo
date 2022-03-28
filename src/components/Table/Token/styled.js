import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const TokenButton = styled.button`
  width: 60%;
  height: 60%;
  margin: 20%;
  background-color: ${({ player }) => getPlayerColor(player)};
  border-radius: 100%;
  border: 0;
  cursor: pointer;
`;
