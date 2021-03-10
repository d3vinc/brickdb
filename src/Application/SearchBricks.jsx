import React, { Component } from "react";

import personalDb from "./db/db.json";
import setsDb from "./db/sets.csv.json";
import { getPersonalItemBySetNum, getSetByKeyword } from "./helpers";

const TYPES = ["taobao", "pinduoduo"];

export default class SearchBricks extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  /**
   * @param {Object|undefined} personalItemInfo
   * @param {Object} set
   */
  renderPersonalItemInfo = (personalItemInfo, set) => {
    if (!personalItemInfo) {
      return (
        <div>
          {`No data (not found in sets DB): Cannot find sets with given set number: ${set.set_num}`}
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
    return <div>{`${type} lowest price: ${price}, PPP: ${ppp}`}</div>;
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
        <div>{`Product ID: ${set.set_num}`}</div>
        <div>{`Piece Count: ${set.num_parts}`}</div>
        {this.renderPersonalItemInfo(personalItemInfo, set)}

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

    const foundSet = getSetByKeyword(setsDb, value);
    if (!foundSet) {
      return "No data (not found in sets DB)";
    }

    const foundItem = getPersonalItemBySetNum(personalDb, foundSet.set_num);
    return this.renderProduct(foundSet, foundItem);
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
