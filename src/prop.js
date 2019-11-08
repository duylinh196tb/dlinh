import _curry2 from "./internal/_curry2";

const prop = (key, obj) => {
  return obj[key];
};

export default _curry2(prop);
