const PriceHistory = ({ set, priceHistory }) => {
  if (!priceHistory) {
    return (
      <div>
        {`No data (not found in price_histories table): Cannot find sets with given set number: ${set.set_num}`}
      </div>
    );
  }

  const { date, price, app, note } = priceHistory;
  return (
    <div>
      <div>
        <b>Price History:</b>
      </div>
      <div>
        <span>{date}</span>|<b>{price}</b>|<span>{app}</span>|
        <span>PPP:{(price / set.num_parts).toFixed(2)}</span>
        <br />
        <p>{note}</p>
      </div>
    </div>
  );
};

export default PriceHistory;
