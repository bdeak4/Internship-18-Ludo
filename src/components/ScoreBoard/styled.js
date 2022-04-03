import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const ScoreBoardWrapper = styled.div`
  margin: 1em;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: 8px;
  }

  @media screen and (min-width: 1200px) {
    position: fixed;
    top: 0;
    right: 0;
  }
`;

export const ScoreBoardPlayer = styled.div`
  aspect-ratio: 1;
  background-color: ${({ player }) => getPlayerColor(player)};
  border: 2px solid black;
  padding: 1em;
  text-align: right;
  margin-bottom: 8px;

  width: calc(50% - 8px);

  @media screen and (max-width: 1200px) {
    margin-right: 8px;
  }

  @media screen and (min-width: 1200px) {
    width: 168px;
  }
`;

export const PlayerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ResetButton = styled.button`
  width: 100%;
  font-size: 24px;
  background-color: transparent;
  border: 2px solid black;
  cursor: pointer;
  text-align: left;

  @media screen and (max-width: 1200px) {
    margin-right: 8px;
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.45);
  }
`;
