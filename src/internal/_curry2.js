import _curry1 from "./_curry1";
import _isPlaceholder from "./_isPlaceholder";

const _curry2 = fn => {
  const f1 = (...args) => {
    const argsLength = args.length;
    const [a, b] = args;
    switch (argsLength) {
      case 0:
        return f1;
      case 1:
        if (_isPlaceholder(a)) {
          return f1;
        }
        return _curry1(_b => fn(a, _b));
      default:
        if (_isPlaceholder(a) && _isPlaceholder(b)) {
          return f1;
        }
        if (_isPlaceholder(a)) {
          return _curry1(_a => fn(_a, b));
        }
        if (_isPlaceholder(b)) {
          return _curry1(_b => fn(a, _b));
        }
        return fn(...args);
    }
  };
  return f1;
};

export default _curry2;
