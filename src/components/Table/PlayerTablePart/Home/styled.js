import styled from "styled-components";
import { getPlayerColor } from "../../../../utils/player";

export const HomeWrapper = styled.div`
  background-color: ${({ player }) => getPlayerColor(player)};
  width: 66.66666%;
  height: 100%;
  border: 1px solid black;
`;

export const PlayersWrapper = styled.div`
  background-color: white;
  margin: 16.66666%;
  aspect-ratio: 1;
`;
