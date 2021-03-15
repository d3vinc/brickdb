// Integrity testing

import productNotes from "./product_notes.json";

test("DB should not have duplicated product ID", () => {
  const ids = productNotes.map((p) => p.product_id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("Product ID should be string", () => {
  productNotes.forEach((p) => {
    expect(typeof p.product_id).toBe("string");
  });
});
