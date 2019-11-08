import _isPlaceholder from "./_isPlaceholder";

const _curry1 = fn => {
  const f1 = (...args) => {
    if (args.length === 0 || _isPlaceholder(args[0])) {
      return f1;
    } else {
      return fn(...args);
    }
  };
  return f1;
};

export default _curry1;
