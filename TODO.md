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

## [ ] JSON vs Yaml, which is better for me?

I used JSON to store product info like the price of the bought used product. But when I manually update JSON, it is a bit messy for me. If I used Yaml, maybe it more suitable for humans to read and write.

![https___www.json.png](https://trello-attachments.s3.amazonaws.com/603e81c97b572446fd853fca/604e3b6091575988a6a7a235/6fb93ff2e49ac87b4a952652fe621051/https___www.json.png) 



## If want to support Yaml

Try to answer these questions:

- Do I want to read Yaml at runtime or build time?
- If want to be at build time, then how to add Yaml loader to create-react-app
- If want to be at runtime, then which library to choose?
  - js-yaml
