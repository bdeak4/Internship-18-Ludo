import styled from "styled-components";

export const DiceRollerWrapper = styled.div`
  width: 65%;
  height: 65%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CursorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: ${({ isSpinning }) =>
    isSpinning
      ? "spin infinite 200ms linear, opacity-hide 500ms ease-out"
      : "pulse 1s ease-out infinite"};
`;

export const DiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isSpinning }) =>
    isSpinning && "spin infinite 250ms linear, opacity-show 250ms ease-out"};
`;
