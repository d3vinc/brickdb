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

![ACBDA40D-00DC-42C2-AD4A-4452C46E40F4](https://user-images.githubusercontent.com/5204106/158002617-b686ccd6-24f4-4097-a157-8ab71c504eb8.png)

### If want to support Yaml

Try to answer these questions:

- Do I want to read Yaml at runtime or build time?
- If want to be at build time, then how to add Yaml loader to create-react-app
- If want to be at runtime, then which library to choose?
  - js-yaml
