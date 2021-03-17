const PurchaseHistory = ({ set, purchaseHistory }) => {
  if (!purchaseHistory) {
    return (
      <div>
        {`No data (not found in purchase_histories table): Cannot find sets with given set number: ${set.set_num}`}
      </div>
    );
  }

  const { date, price, app, is_used: isUsed, weight, notes } = purchaseHistory;
  return (
    <div>
      <div>
        <b>Purchase History:</b>
      </div>
      <div>
        <span>{date}</span>|<b>{price}</b>|<span>{app}</span>|
        <span>{isUsed ? "Used" : "New"}</span>|<span>{weight}</span>|
        <span>PPP:{(price / set.num_parts).toFixed(2)}</span>
        <br />
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default PurchaseHistory;
