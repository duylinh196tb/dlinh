import _curry2 from "../../src/internal/_curry2";
import __ from "../../src/__";

describe("_curry2", () => {
  const f = (a, b) => [a, b];
  const g = _curry2(f);
  it("support dl.__   ", () => {
    expect(g(1, 2)).toEqual([1, 2]);
    expect(g()(1, 2)).toEqual([1, 2]);
    expect(g(1)(2)).toEqual([1, 2]);

    expect(g(__)(1, 2)).toEqual([1, 2]);

    expect(g(__, 2)(1)).toEqual([1, 2]);
    expect(g(1, __)(2)).toEqual([1, 2]);

    expect(g(__, __)(1, 2)).toEqual([1, 2]);
    expect(g(__, __)(1)(2)).toEqual([1, 2]);
    expect(g(__, __)(__)(1)(2)).toEqual([1, 2]);
    expect(g(__, __)(__, 2)(1)).toEqual([1, 2]);
  });
});
