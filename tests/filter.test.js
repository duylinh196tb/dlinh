import filter from "../src/filter";

describe("filter", () => {
  it("should filter in array", () => {
    expect(filter(Boolean, [1, null, 2, 3])).toEqual([1, 2, 3]);
  });
});
