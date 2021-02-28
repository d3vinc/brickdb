import React, { Component } from "react";

import { ppp } from "./utils";
import db from "./db/db.json";
import setsDb from "./db/sets.csv.json";

class App extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  renderProduct = (item, set) => {
    // How to render product images: https://brickset.com/article/49510/new-version-of-brickset-api-now-available
    // {
    //   "thumbnailURL": " https://images.brickset.com/sets/small/21322-1.jpg ",
    //   "imageURL": " https://images.brickset.com/sets/images/21322-1.jpg ",
    //   "bricksetURL": " https://brickset.com/sets/21322-1 ",
    // }
    return (
      <div>
        {`Product ID: ${item.product_id}, Piece Count: ${
          set.num_parts
        }, PPP: ${ppp(
          [item.taobao_lowest_price, item.pinduoduo_lowest_price],
          set.num_parts
        )}`}
        <img
          src={`https://images.brickset.com/sets/small/${set.set_num}.jpg`}
          alt={`LEGO ${set.set_num}`}
        />
      </div>
    );
  };

  renderContent = () => {
    const { value } = this.state;

    if (!value) {
      return "Please input";
    }

    const foundItem = db.find((item) => item.product_id.indexOf(value) !== -1);
    if (!foundItem) {
      return "No data (not found in personal DB)";
    }

    const foundSet = setsDb.find(
      (set) => set.set_num === `${foundItem.product_id}-1`
    );
    if (!foundSet) {
      return `No data (not found in sets DB): Cannot find sets with given product id: ${foundItem.product_id}`;
    }

    return this.renderProduct(foundItem, foundSet);
  };

  render() {
    return (
      <div>
        <h1>Brick DB</h1>
        <input onChange={this.handleChange}></input>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default App;
