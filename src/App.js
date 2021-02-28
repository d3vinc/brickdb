import React, { Component } from "react";

const db = [
  {
    product_id: "10717",
  },
];

class App extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const { value } = this.state;
    let content = "No Data";

    if (!value) {
      content = "Please input";
    } else {
      const foundItem = db.find(
        (item) => item.product_id.indexOf(value) !== -1
      );
      if (foundItem) {
        content = `Product ID: ${foundItem.product_id}`;
      }
    }

    return (
      <div>
        <h1>Brick DB</h1>
        <input onChange={this.handleChange}></input>
        <div>{content}</div>
      </div>
    );
  }
}

export default App;
