import React, { Component } from "react";

import SearchBricks from "./SearchBricks";
import ErrorBoundary from "./ErrorBoundary";

export default class Application extends Component {
  render() {
    return (
      <div>
        <h1>Brick DB</h1>
        <ErrorBoundary>
          <SearchBricks />
        </ErrorBoundary>
      </div>
    );
  }
}
