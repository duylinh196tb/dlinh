import filter from "../src/filter";

describe("filter", () => {
  it("should filter in array", () => {
    expect(filter(Boolean, [1, null, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should filter in array with index", () => {
    const cb = (x, i) => i > 1;
    expect(filter(cb, [0, 1, 2])).toEqual([2]);
  });
});
