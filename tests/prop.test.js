import prop from "../src/prop";
import map from "../src/map";

describe("prop", () => {
  it("should get value by key in obj", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(prop("a", obj)).toEqual(1);
  });
  it("should get value by key in obj[]", () => {
    const arr_obj = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }];
    expect(map(prop("a"), arr_obj)).toEqual([1, 2, 3]);
  });
});
