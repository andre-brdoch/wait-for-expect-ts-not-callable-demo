import { describe, it, expect } from "vitest";
import waitForExpect from "wait-for-expect";

describe("test", () => {
  it("works", async () => {
    let value = 0;
    expect(value).toBe(0);
    setTimeout(() => {
      value = 1;
    }, 1000);
    await waitForExpect(() => {
      expect(value).toBe(1);
    });
  });
});
