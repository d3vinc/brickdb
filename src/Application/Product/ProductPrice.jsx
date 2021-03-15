/**
 * @param {string} type "taobao" or "pinduoduo"
 */
const ProductPrice = ({ type, item, count }) => {
  const price = item[`${type}_lowest_price`];
  const ppp = price / count;
  return (
    <div>
      <b>{`${type} lowest price: `}</b>
      {price}
      <b>PPP: </b>
      {ppp}
    </div>
  );
};

export default ProductPrice;
