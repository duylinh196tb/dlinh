import subtract from "../src/subtract";
import __ from "../src/__";

describe("subtract", () => {
  it("subtract 2 numbers", () => {
    expect(subtract(4, 2)).toEqual(2);
    expect(subtract(4, "2")).toEqual(2);
    expect(subtract("4", "2")).toEqual(2);
    expect(subtract(4)(2)).toEqual(2);
    expect(subtract(__, __)(4, 2)).toEqual(2);
    expect(subtract(__, __)(4)(2)).toEqual(2);
  });
});
