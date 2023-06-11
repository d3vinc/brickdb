import React, { Component } from 'react';

import { Settings, constants } from '@db-man/components';
import SearchBricksWrapper from 'Application/SearchBricksWrapper';
import ErrorBoundary from './ErrorBoundary';

import './index.css';

export default class Application extends Component {
  render() {
    const dbs = JSON.parse(localStorage.getItem(constants.LS_KEY_DBS_SCHEMA));
    if (dbs) {
      return (
        <div>
          <ErrorBoundary>
            <SearchBricksWrapper />
          </ErrorBoundary>
        </div>
      );
    }
    return (
      <div>
        <ErrorBoundary>
          <Settings />
        </ErrorBoundary>
      </div>
    );
  }
}
