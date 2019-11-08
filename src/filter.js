import _curry2 from "./internal/_curry2";

const filter = (cb, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!!cb(item, i)) {
      newArr.push(item);
    }
  }

  return newArr;
};

export default _curry2(filter);
