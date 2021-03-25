import ProductNote from "./ProductNote";
import PurchaseHistory from "./PurchaseHistory";
import PriceHistory from "./PriceHistory";

/**
 * @param {Object} set
 * @param {ProductNote|null} productNote
 * @param {PurchaseHistory|null} purchaseHistory
 */
const Product = ({ set, productNote, purchaseHistory, priceHistory }) => {
  // How to render product images: https://brickset.com/article/49510/new-version-of-brickset-api-now-available
  // {
  //   "thumbnailURL": " https://images.brickset.com/sets/small/21322-1.jpg ",
  //   "imageURL": " https://images.brickset.com/sets/images/21322-1.jpg ",
  //   "bricksetURL": " https://brickset.com/sets/21322-1 ",
  // }
  let imgUrl = `https://images.brickset.com/sets/small/${set.set_num}.jpg`;
  imgUrl = `https://xxd3vin.github.io/static/images.brickset.com/sets/small/${set.set_num}.jpg`;
  return (
    <div>
      <div>
        <b>Product ID: </b>
        {set.set_num}
      </div>
      <div>
        <b>Piece Count: </b>
        {set.num_parts}
      </div>
      <ProductNote set={set} productNote={productNote} />
      <PurchaseHistory set={set} purchaseHistory={purchaseHistory} />
      <PriceHistory set={set} priceHistory={priceHistory} />
      <a href={imgUrl} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={`LEGO ${set.set_num}`} />
      </a>
    </div>
  );
};

export default Product;
