import multiply from "../src/multiply";
import __ from "../src/__";

describe("multiply", () => {
  it("multiply 2 numbers", () => {
    expect(multiply(4, 5)).toEqual(20);
    expect(multiply(4, "5")).toEqual(20);
    expect(multiply("4", "5")).toEqual(20);
    expect(multiply(4)(5)).toEqual(20);
    expect(multiply(__, __)(4, 5)).toEqual(20);
    expect(multiply(__, __)(4)(5)).toEqual(20);
  });
});
