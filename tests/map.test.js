import map from "../src/map";
import __ from "../src/__";

describe("map", () => {
  it("should map []", () => {
    const arr_string = ["1", "2", "3"];
    const cb = x => x + "a";
    expect(map(cb, arr_string)).toEqual(["1a", "2a", "3a"]);
    expect(map(cb)(arr_string)).toEqual(["1a", "2a", "3a"]);
    expect(map(__)(cb)(arr_string)).toEqual(["1a", "2a", "3a"]);
  });
});
