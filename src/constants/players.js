export const players = Object.freeze({
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
});

export const initialPlayerState = {
  name: "",
  score: 0,
  disabled: false,
  active: false,
  tokens: Array(4).fill({
    position: -1,
  }),
};
