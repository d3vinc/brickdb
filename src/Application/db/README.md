# db

## How to get sets.csv.json

1. Download "sets.csv" from [https://rebrickable.com/downloads/](https://rebrickable.com/downloads/)
2. Convert CSV to JSON using [https://csvjson.com/csv2json](https://csvjson.com/csv2json)

## Struct of a LEGO set data

The type is defined in `typeDef.js`

Most of the types of `set_num` fields are `string`. But some of them are `number`. For example the LEGO set whose set number is 4180878. You can see the data below.

```json
{
  "set_num": 4180878,
  "name": "Bionicle Poster 2002, Bohrok front Krana back, 420 x 295 mm",
  "year": 2002,
  "theme_id": 501,
  "num_parts": 0
}
```

## Tables

### purchase_histories

```json
{
  "product_id": "60004", // Required
  "date": "2021-03-08", // Required, when purchase it
  "price": 200, // Required, for how much
  "app": "xianyu", // Required, from which App bought it
  "is_used": true, // Optional, default is false, product is used or new
  "weight": 123, // Optional, default is 0, unit is g, only bricks' weight, box not included
  "notes": "没有飞机，主楼少几个件" // Optional, default is empty string
}
```

Some fields or keys could not provide in this structure. For example, you can ignore "is_used" fields, then by default it is a new product.
