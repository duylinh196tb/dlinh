import _curry2 from "./internal/_curry2";

const forEach = (cb, arr) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

export default _curry2(forEach);
