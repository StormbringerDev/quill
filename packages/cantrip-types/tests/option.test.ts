import { describe, expect, it } from "vitest";
import {
  isNone,
  isSome,
  None,
  type Option,
  Some,
  optionUnwrap as unwrap,
} from "../src/index.js";

describe("Some", () => {
  it("returns an Option of kind 'some' with value 42", () => {
    const someNumber: Option<number> = Some(42);
    expect(someNumber.kind).toBe("some");
    expect(someNumber.value).toBe(42);
  });

  it("returns an Option of kind 'some' with value 'Quill'", () => {
    const someString: Option<string> = Some("Quill");
    expect(someString.kind).toBe("some");
    expect(someString.value).toBe("Quill");
  });
});

describe("None", () => {
  it("returns an Option of kind 'none' with no value", () => {
    const none: Option<number> = None;
    expect(none.kind).toBe("none");
    expect(none.value).toBeUndefined();
  });
});

describe("isSome", () => {
  it("returns true when given an Option of kind 'some'", () => {
    const someNumber: Option<number> = Some(42);
    expect(isSome(someNumber)).toBe(true);
  });

  it("returns false when given an Option of kind 'none'", () => {
    const none: Option<number> = None;
    expect(isSome(none)).toBe(false);
  });
});

describe("isNone", () => {
  it("returns true when given an Option of kind 'none'", () => {
    const none: Option<number> = None;
    expect(isNone(none)).toBe(true);
  });

  it("returns false when given an Option of kind 'some'", () => {
    const someNumber: Option<number> = Some(42);
    expect(isNone(someNumber)).toBe(false);
  });
});

describe("unwrap", () => {
  it("returns the inner value of the given Option", () => {
    const someNumber: Option<number> = Some(42);
    expect(unwrap(someNumber)).toBe(42);
  });

  it("throws an error if Option is none", () => {
    const none: Option<number> = None;
    expect(() => unwrap(none)).toThrow();
  });
});
