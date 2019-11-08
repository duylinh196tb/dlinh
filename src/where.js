import _has from "./internal/_has";
import _curry2 from "./internal/_curry2";

const where = (prop, testObj) => {
  for (let key in prop) {
    if (!_has(key, testObj) || !_has(key, prop)) {
      return false;
    }

    const testFn = prop[key];
    if (["string", "boolean", "number"].includes(typeof testFn)) {
      if (testFn !== testObj[key]) {
        return false;
      }
    } else if (!testFn(testObj[key])) {
      return false;
    }
  }
  return true;
};
export default _curry2(where);
