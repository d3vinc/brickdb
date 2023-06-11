import React, { useState, useEffect } from 'react';

import SearchBricks from 'Application/SearchBricks';
import { constants } from '@db-man/components';
import { GithubDbV2 } from '@db-man/github';

const dbName = 'brickdb';

export default function SearchBricksWrapper() {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({
    priceHistories: [],
    productNotes: [],
    purchaseHistories: [],
    sets: [],
  });

  useEffect(() => {
    const githubDb = new GithubDbV2({
      personalAccessToken: localStorage.getItem(
        constants.LS_KEY_GITHUB_PERSONAL_ACCESS_TOKEN
      ),
      repoPath: localStorage.getItem(constants.LS_KEY_GITHUB_REPO_PATH),
      owner: localStorage.getItem(constants.LS_KEY_GITHUB_OWNER),
      repoName: localStorage.getItem(constants.LS_KEY_GITHUB_REPO_NAME),
      dbsSchema: localStorage.getItem(constants.LS_KEY_DBS_SCHEMA),
    });
    const controller = new AbortController();

    setLoading(true);
    Promise.all(
      ['price_histories', 'product_notes', 'purchase_histories', 'sets'].map(
        (tableName) =>
          githubDb
            .getTableRows(dbName, tableName, controller.signal)
            .then(({ content }) => content)
      )
    ).then(([priceHistories, productNotes, purchaseHistories, sets]) => {
      setData({ priceHistories, productNotes, purchaseHistories, sets });
      setLoading(false);
    });

    return function cleanup() {
      controller.abort();
    };
  }, []);

  if (loading === null) return null;
  if (loading === true) return 'Loading...';

  return <SearchBricks data={data} />;
}
