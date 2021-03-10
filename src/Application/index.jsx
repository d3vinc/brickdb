import React, { Component } from "react";

import SearchBricks from "./SearchBricks";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
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

export default App;
