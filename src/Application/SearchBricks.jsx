import React, { Component } from "react";
import debounce from "lodash.debounce";

import personalDb from "./db/db.json";
import setsDb from "./db/sets.csv.json";
import { getPersonalItemBySetNum, getSetByKeyword } from "./helpers";

const TYPES = ["taobao", "pinduoduo"];

export default class SearchBricks extends Component {
  constructor(props) {
    super(props);
    this.searchSetByKeyword = debounce(this.searchSetByKeyword, 1000);
  }

  state = {
    value: "",
    /** @type {Brickable~Set} LEGO set */
    set: null,
    personalItem: null,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.searchSetByKeyword(event.target.value);
  };

  searchSetByKeyword = (keyword) => {
    const foundSet = getSetByKeyword(setsDb, keyword);
    if (!foundSet) {
      this.setState({ set: null });
      return;
    }
    this.setState({ set: foundSet });

    const foundItem = getPersonalItemBySetNum(personalDb, foundSet.set_num);
    if (!foundItem) {
      this.setState({ personalItem: null });
    }
    this.setState({ personalItem: foundItem });
  };

  /**
   * @param {Object|undefined} personalItemInfo
   * @param {Object} set
   */
  renderPersonalItemInfo = (personalItemInfo, set) => {
    if (!personalItemInfo) {
      return (
        <div>
          {`No data (not found in personal info DB): Cannot find sets with given set number: ${set.set_num}`}
        </div>
      );
    }
    return (
      <div>
        {TYPES.map((type) => (
          <div key={type}>
            {this.renderPrice(type, personalItemInfo, set.num_parts)}
          </div>
        ))}
      </div>
    );
  };

  /**
   * @param {string} type "taobao" or "pinduoduo"
   */
  renderPrice = (type, item, count) => {
    const price = item[`${type}_lowest_price`];
    const ppp = price / count;
    return (
      <div>
        <b>{`${type} lowest price:`}</b>
        {price}
        <b>PPP</b>
        {ppp}
      </div>
    );
  };

  /**
   *
   *
   * @param {Object} set
   * @param {Object|undefined} personalItemInfo
   */
  renderProduct = (set, personalItemInfo) => {
    // How to render product images: https://brickset.com/article/49510/new-version-of-brickset-api-now-available
    // {
    //   "thumbnailURL": " https://images.brickset.com/sets/small/21322-1.jpg ",
    //   "imageURL": " https://images.brickset.com/sets/images/21322-1.jpg ",
    //   "bricksetURL": " https://brickset.com/sets/21322-1 ",
    // }
    return (
      <div>
        <div>
          <b>Product ID:</b>
          {set.set_num}
        </div>
        <div>
          <b>Piece Count</b>
          {set.num_parts}
        </div>
        {this.renderPersonalItemInfo(personalItemInfo, set)}
        <img
          src={`https://images.brickset.com/sets/small/${set.set_num}.jpg`}
          alt={`LEGO ${set.set_num}`}
        />
      </div>
    );
  };

  renderContent = () => {
    const { value, set, personalItem } = this.state;

    if (!value) {
      return "Please input";
    }

    if (!set) {
      return "No data (not found in sets DB)";
    }

    return this.renderProduct(set, personalItem);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
