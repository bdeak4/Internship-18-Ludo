export const players = Object.freeze({
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
});

export const tokenHomePosition = -1;

export const initialTokenState = Array(4).fill({
  position: tokenHomePosition,
});

export const initialPlayerState = {
  name: "",
  score: 0,
  disabled: true,
  active: false,
  tokens: initialTokenState,
};
