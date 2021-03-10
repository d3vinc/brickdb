/**
 * Get info object of a set by searching keyword
 * @param {Array} db
 * @param {string} keyword
 * @returns {Object|undefined}
 */
export const getSetByKeyword = (db, keyword) =>
  db.find((set /** @type {Rebrickable~Set} */) => {
    // Take an example of 4180878 set, the type `set_num` is number, not string.
    return String(set.set_num).indexOf(keyword) !== -1;
  });

/**
 * Get personal info object of a set by product ID
 * @param {Array} db
 * @param {string} setNum e.g. "10717-1"
 * @returns {Object|undefined}
 */
export const getPersonalItemBySetNum = (db, setNum) =>
  db.find((item) => `${item.product_id}-1` === setNum);
