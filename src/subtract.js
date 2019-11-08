import _curry2 from "./internal/_curry2";

const subtract = (a, b) => {
  return Number(a) - Number(b);
};

export default _curry2(subtract);
