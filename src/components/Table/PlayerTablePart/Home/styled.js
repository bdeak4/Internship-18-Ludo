import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const HomeWrapper = styled.div`
  background-color: ${({ player }) => getPlayerColor(player)};
  width: 66.66666%;
  height: 100%;
  border: 1px solid black;
`;

export const TokensWrapper = styled.div`
  background-color: white;
  margin: 16.66666%;
  padding: 2.5%;
  aspect-ratio: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const TokenWrapper = styled.div`
  width: 30%;
  height: 30%;
  margin: 10%;
  background-color: ${({ player }) => getPlayerColor(player) + "66"};
  border-radius: 100%;
`;
