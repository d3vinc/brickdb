// Integrity testing

import db from "./db.json";

test("DB should not have duplicated product ID", () => {
  const ids = db.map((p) => p.product_id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("Product ID should be string", () => {
  db.forEach((p) => {
    expect(typeof p.product_id).toBe("string");
  });
});
