/**
 * Get info object of a set by searching keyword
 * @param {Array} db
 * @param {string} keyword
 * @returns {Object|null}
 */
export const getSetByKeyword = (db, keyword) =>
  db.find((set /** @type {Rebrickable~Set} */) => {
    // Take an example of 4180878 set, the type `set_num` is number, not string.
    return String(set.set_num).indexOf(keyword) !== -1;
  }) || null;

/**
 * By given set number, can get:
 * - Purchase history of product (in purchase_histories.json)
 * - Personal info of product (in product_notes.json)
 * @param {Array} db
 * @param {string} setNum e.g. "10717-1"
 * @returns {Object|null} Null when set not found
 */
export const queryProductItemBySetNum = (db, setNum) =>
  db.find((item) => `${item.product_id}-1` === setNum) || null;

/**
 * By given set number, can get:
 * - Purchase histories of products (in purchase_histories.json)
 * - Historical product prices (in price_histories.json)
 * @param {Array} rows
 * @param {string} setNum e.g. "10717-1"
 * @returns {PriceHistory[]}
 */
export const queryProductItemsBySetNum = (rows, setNum) =>
  rows.filter((item) => `${item.product_id}-1` === setNum);
