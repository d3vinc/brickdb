import { ppp } from "./utils";

test("ppp should return proper value", () => {
  expect(ppp([10, 20], 10)).toBe("1.00");
  expect(ppp([10, 0], 10)).toBe("1.00");
  expect(ppp([10, undefined], 10)).toBe("1.00");
});
