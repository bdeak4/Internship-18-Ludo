import styled from "styled-components";
import { getPlayerColor } from "utils/player";

export const PlayerForm = styled.form`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlayerFormHeading = styled.div`
  padding: 24px;
  border-bottom: 2px solid black;
  background-color: ${({ color }) => color};
`;

export const PlayerInput = styled.div`
  background-color: ${({ player }) => getPlayerColor(player)};
  padding: 24px;
  border-bottom: 2px solid black;

  input {
    max-width: 500px;
    width: 100%;
    font-size: 24px;
    background-color: transparent;
    border: 2px solid black;
  }

  input:focus {
    outline: 2px solid rgba(0, 0, 0, 0.45);
  }
`;

export const PlayerFormFooter = styled.div`
  padding: 24px;
  background-color: ${({ color }) => color};
  flex-grow: 1;
`;

export const PlayerSubmit = styled.button`
  max-width: 500px;
  width: 100%;
  font-size: 24px;
  background-color: transparent;
  border: 2px solid black;
  cursor: pointer;
  text-align: left;

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.45);
  }
`;
