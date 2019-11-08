import _curry2 from "./internal/_curry2";

const map = (cb, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i));
  }
  return newArr;
};

export default _curry2(map);
