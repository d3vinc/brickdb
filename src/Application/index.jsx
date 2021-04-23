import React, { Component } from "react";

import SearchBricks from "./SearchBricks";
import ErrorBoundary from "./ErrorBoundary";

import "./index.css";

export default class Application extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <SearchBricks />
        </ErrorBoundary>
      </div>
    );
  }
}
