import { describe, expect, it } from "vitest";
import {
  Err,
  isErr,
  isOk,
  Ok,
  type Result,
  resultUnwrap as unwrap,
} from "../src/index.js";

describe("Ok", () => {
  it("returns a Result with value 42", () => {
    const numberResult: Result<number, Error> = Ok(42);
    expect(numberResult.ok).toBe(true);
    expect(numberResult.value).toBe(42);
  });

  it("returns a Result with value 'Quill'", () => {
    const stringResult: Result<string, Error> = Ok("Quill");
    expect(stringResult.ok).toBe(true);
    expect(stringResult.value).toBe("Quill");
  });
});

describe("Err", () => {
  it("returns a Result with error message 'Missing semicolon at line 42'", () => {
    const errorResult: Result<number, Error> = Err(
      new Error("Missing semicolon at line 42"),
    );
    expect(errorResult.ok).toBe(false);
    expect(errorResult.error.message).toBe("Missing semicolon at line 42");
  });
});

describe("isOk", () => {
  it("returns true when given a Result that is Ok", () => {
    const numberResult: Result<number, Error> = Ok(42);
    expect(isOk(numberResult)).toBe(true);
  });

  it("returns false when given a Result that is Err", () => {
    const errorResult: Result<number, Error> = Err(new Error("Unexpected token '$'"));
    expect(isOk(errorResult)).toBe(false);
  });
});

describe("isErr", () => {
  it("returns true when given a Result that is Err", () => {
    const errorResult: Result<number, Error> = Err(new Error("Unexpected token '$'"));
    expect(isErr(errorResult)).toBe(true);
  });

  it("returns false when given a Result that is Ok", () => {
    const numberResult: Result<number, Error> = Ok(42);
    expect(isErr(numberResult)).toBe(false);
  });
});

describe("unwrap", () => {
  it("returns the inner value of the given Result", () => {
    const numberResult: Result<number, Error> = Ok(42);
    expect(unwrap(numberResult)).toBe(42);
  });

  it("throws the inner error of the given Result", () => {
    const errorResult: Result<number, Error> = Err(new Error("Unexpected token '$'"));
    expect(() => unwrap(errorResult)).toThrow("Unexpected token '$'");
  });
});
