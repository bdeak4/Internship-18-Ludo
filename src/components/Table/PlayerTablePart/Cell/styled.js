import styled from "styled-components";

export const CellWrapper = styled.div`
  background-color: ${({ isBlank, player }) =>
    isBlank ? "transparent" : player};
  width: 33.33333%;
  aspect-ratio: 1;
  border: 1px solid black;
`;
