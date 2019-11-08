import where from "../src/where";
import lt from "../src/lt";
import __ from "../src/__";
import gt from "../src/gt";

describe("where", () => {
  const testObj = { a: 1, b: 2, c: true };
  it("should test where in object", () => {
    expect(where({ a: lt(__, 2), b: gt(__, 1), c: true }, testObj)).toEqual(
      true
    );
    expect(where({ a: lt(__, 2), b: gt(__, 1) })(testObj)).toBeTruthy();
    expect(where({ a: 1, b: 2 }, testObj)).toBeTruthy();
    //
    expect(where({ a: lt(__, 1), b: gt(__, 1) })(testObj)).toBeFalsy();
    expect(where({ a: 1, b: 3 }, testObj)).toBeFalsy();
    //
    expect(where({ d: 1 }, testObj)).toBeFalsy();
  });
});
