import divide from "../src/divide";
import __ from "../src/__";

describe("divide", () => {
  it("divide 5 numbers", () => {
    expect(divide(15, 5)).toEqual(3);
    expect(divide(15, "5")).toEqual(3);
    expect(divide("15", "5")).toEqual(3);
    expect(divide(15)(5)).toEqual(3);
    expect(divide(__, __)(15, 5)).toEqual(3);
    expect(divide(__, __)(15)(5)).toEqual(3);
  });
});
