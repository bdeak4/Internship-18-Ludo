import { players } from "../../../constants/players";

export const customStyles = {
  [players.blue]: {
    backgroundColor: "blue",
    bottom: 0,
    right: 0,
    transform: "translateY(100%) rotate(90deg)",
    transformOrigin: "top right",
  },
  [players.red]: {
    backgroundColor: "red",
    bottom: 0,
    left: 0,
    transform: "rotate(180deg)",
  },
  [players.green]: {
    backgroundColor: "green",
    top: 0,
    left: 0,
    transform: "translateY(150%) rotate(270deg)",
    transformOrigin: "top left",
  },
  [players.yellow]: {
    backgroundColor: "yellow",
    top: 0,
    right: 0,
  },
};
