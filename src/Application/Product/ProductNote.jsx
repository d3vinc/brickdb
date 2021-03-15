import ProductPrice from "./ProductPrice";

const TYPES = ["taobao", "pinduoduo"];

/**
 * @param {Rebrickable~Set} set
 * @param {ProductNote|null} productNote
 */
const ProductNote = ({ set, productNote }) => {
  if (!productNote) {
    return (
      <div>
        {`No data (not found in product_notes table): Cannot find sets with given set number: ${set.set_num}`}
      </div>
    );
  }
  return (
    <div>
      {TYPES.map((type) => (
        <div key={type}>
          <ProductPrice type={type} item={productNote} count={set.num_parts} />
        </div>
      ))}
    </div>
  );
};

export default ProductNote;
