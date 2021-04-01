import React, { Component } from "react";
import debounce from "lodash.debounce";

import setsDb from "./db/sets.csv.json";
import productNotes from "./db/product_notes.json";
import priceHistories from "./db/price_histories.json";
import purchaseHistories from "./db/purchase_histories.json";
import {
  queryProductItemBySetNum,
  queryProductItemsBySetNum,
  getSetByKeyword,
} from "./helpers";
import Product from "./Product";

const defaultValue = "";

export default class SearchBricks extends Component {
  state = {
    value: defaultValue,
    /** @type {Brickable~Set} LEGO set */
    set: null,
    /** @type {ProductNote} */
    productNote: null,
    /** @type {PurchaseHistory} */
    purchaseHistory: null,
    /** @type {PriceHistory[]} */
    priceHistories: [],
  };

  constructor(props) {
    super(props);
    this.searchSetByKeyword = debounce(this.searchSetByKeyword, 500);
    console.debug(
      "purchaseHistories",
      purchaseHistories.reduce((result, currentValue) => {
        result += currentValue.price;
        return result;
      }, 0)
    );
    window.setsDb = setsDb;
    this.inputRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.searchSetByKeyword(event.target.value);
  };

  handleReset = () => {
    this.setState({ value: defaultValue });
    this.inputRef.current.focus();
  };

  searchSetByKeyword = (keyword) => {
    const foundSet = getSetByKeyword(setsDb, keyword);
    if (!foundSet) {
      this.setState({ set: null });
      return;
    }

    this.setState({
      set: foundSet,
      productNote: queryProductItemBySetNum(productNotes, foundSet.set_num),
      purchaseHistory: queryProductItemBySetNum(
        purchaseHistories,
        foundSet.set_num
      ),
      priceHistories: queryProductItemsBySetNum(
        priceHistories,
        foundSet.set_num
      ),
    });
  };

  renderContent = () => {
    const {
      value,
      set,
      productNote,
      purchaseHistory,
      priceHistories,
    } = this.state;

    if (!value) {
      return "Please input LEGO product ID, e.g. 75192";
    }

    if (!set) {
      return "No data (not found in sets DB)";
    }

    return (
      <Product
        set={set}
        productNote={productNote}
        purchaseHistory={purchaseHistory}
        priceHistories={priceHistories}
      />
    );
  };

  render() {
    return (
      <div>
        <input
          autoFocus
          ref={this.inputRef}
          value={this.state.value}
          onChange={this.handleChange}
        ></input>{" "}
        <button onClick={this.handleReset}>Reset</button>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
