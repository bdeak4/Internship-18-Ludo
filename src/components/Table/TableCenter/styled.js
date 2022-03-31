import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const TableCenterWrapper = styled.div`
  width: 20%;
  height: 20%;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
`;

export const TableCenterRotated = styled.div`
  width: 150%;
  height: 150%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
`;

export const PlayerTableCenter = styled.div`
  width: 50%;
  height: 50%;
  background-color: ${({ player }) => getPlayerColor(player)};
  border: 1px solid black;
`;
