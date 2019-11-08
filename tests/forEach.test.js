// import __  from "../src/__";
import forEach from "../src/forEach";
import map from "../src/map";

describe("map", () => {
  it("should for each []", () => {
    const arr_string = ["1", "2", "3"];
    const fakeConsole = {
      log: jest.fn()
    };
    const cb = (x, index) => fakeConsole.log(x, index);
    forEach(cb, arr_string);
    expect(fakeConsole.log).toHaveBeenCalledTimes(arr_string.length);
    expect(fakeConsole.log.mock.calls).toEqual(
      map((x, index) => [x, index], arr_string)
    );
  });
});
