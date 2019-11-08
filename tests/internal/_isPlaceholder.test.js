import _isPlaceholder from "../../src/internal/_isPlaceholder";
import __ from "../../src/__";

describe("_isPlaceholder", () => {
  const placeholder = { "@@functional/placeholder": true };
  it("should is placeholder", () => {
    expect(_isPlaceholder(placeholder)).toEqual(true);
    expect(
      _isPlaceholder({ abc: "321", "@@functional/placeholder": true })
    ).toEqual(true);
    expect(_isPlaceholder(__)).toEqual(true);
  });

  it("should is not placeholder", () => {
    expect(_isPlaceholder({ "@@functional/placeholder": false })).toEqual(
      false
    );
    expect(_isPlaceholder(true)).toEqual(false);
    expect(_isPlaceholder(3)).toEqual(false);
    expect(_isPlaceholder("sadsda")).toEqual(false);
  });
});
