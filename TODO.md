# TODO

- [ ] Change "taobao_lowest_price" to a price list with checking date, so that we could know the price is at which actual date.
- [ ] How to store photos
  - I need to upload photos that I took for the LEGO bricks I bought.
- [ ] Show price per weight
  - To show the price per weight, for example, 100Yuan per 500g.
- [ ] Popup keyword when page load
  - Popup the keyboard when page first loaded, and focus on the input box, so I could fill the product ID at once.

## [ ] Change db struct for prices

From:

```json
{
    "taobao_lowest_price": 538,
    "pinduoduo_lowest_price": 499
}
```

To:

```json
{
    "prices": [
      {
        "from": "pinduoduo",
        "date": "2021-02-23",
        "price": 499
      }
    ]
}
```
