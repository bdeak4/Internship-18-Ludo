import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const ScoreBoardWrapper = styled.div`
  margin: 1em;
  position: fixed;
  top: 0;
  right: 0;
`;

export const ScoreBoardPlayer = styled.div`
  aspect-ratio: 1;
  width: 168px;
  background-color: ${({ player }) => getPlayerColor(player)};
  border: 2px solid black;
  padding: 1em;
  margin-bottom: 8px;
  text-align: right;
`;

export const PlayerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
