import _curry1 from "../../src/internal/_curry1";
import __ from "../../src/__";
describe("_curry1", () => {
  it("should test true", () => {
    const f = a => a;
    const g = _curry1(f);
    expect(g(3)).toEqual(3);
    expect(g(__)(3)).toEqual(3);
    expect(g(__)(__)(3)).toEqual(3);
    expect(g()()()()()()()()()(3)).toEqual(3);
  });
});
