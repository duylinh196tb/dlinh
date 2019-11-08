import _curry2 from "./internal/_curry2";

const gt = (a, b) => {
  return a > b;
};

export default _curry2(gt);
