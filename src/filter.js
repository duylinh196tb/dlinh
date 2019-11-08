import _curry2 from "./internal/_curry2";

const filter = (cb, arr) => {
  const newArr = [];
  for (let item of arr) {
    if (!!cb(item)) {
      newArr.push(item);
    }
  }

  return newArr;
};

export default _curry2(filter);
