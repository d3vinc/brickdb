import React, { Component } from "react";

import { Settings } from "@db-man/components";
import SearchBricksWrapper from "Application/SearchBricksWrapper";
import ErrorBoundary from "./ErrorBoundary";

import "./index.css";

export default class Application extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Settings>
            <SearchBricksWrapper />
          </Settings>
        </ErrorBoundary>
      </div>
    );
  }
}
