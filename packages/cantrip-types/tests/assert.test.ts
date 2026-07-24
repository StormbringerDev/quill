import { describe, expect, it } from "vitest";
import { assertNever } from "../src/assert.js";

describe("assertNever", () => {
  it("throws error upon execution", () => {
    expect(() => assertNever(2 as never)).toThrow();
  });
});
