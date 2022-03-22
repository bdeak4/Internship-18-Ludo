import styled from "styled-components";

export const TableElement = styled.div`
  margin: 1em;
  /* background-color: red; */
  aspect-ratio: 1;
  max-height: calc(100vh - 2em);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  .player-home {
    position: absolute;
    width: 60%;
    height: 40%;
  }

  .ph0 {
    background-color: green;
    top: 0;
    left: 0;
    transform: translateY(150%) rotate(270deg);
    transform-origin: top left;
  }

  .ph1 {
    background-color: yellow;
    top: 0;
    right: 0;
  }

  .ph2 {
    background-color: blue;
    bottom: 0;
    right: 0;
    transform: translateY(100%) rotate(90deg);
    transform-origin: top right;
  }

  .ph3 {
    background-color: red;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
  }

  .center {
    width: 20%;
    height: 20%;
  }
`;
