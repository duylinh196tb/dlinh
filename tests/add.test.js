import add from "../src/add";
import __ from "../src/__";

describe("add", () => {
  it("add 2 numbers", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(1, "2")).toEqual(3);
    expect(add("1", "2")).toEqual(3);
    expect(add(1)(2)).toEqual(3);
    expect(add(__, __)(1, 2)).toEqual(3);
    expect(add(__, __)(1)(2)).toEqual(3);
  });
});
