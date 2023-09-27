import { calculateResult } from "./utilities";

describe("calculateResult", () => {
  test("Should return matching correct answers", () => {
    expect(calculateResult([1, 0, 0], [1, 0, 2])).toBe(2);
  });
});
