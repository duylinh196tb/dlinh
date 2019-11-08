import _has from "../../src/internal/_has";

describe("has", () => {
  it("should test exist key in object", () => {
    const testObj = { a: 1, b: 2 };
    expect(_has("a", testObj)).toEqual(true);
    expect(_has("c", testObj)).toEqual(false);
  });
});
