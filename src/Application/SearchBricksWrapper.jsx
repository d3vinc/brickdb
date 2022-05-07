import React, { useState, useEffect } from "react";


import SearchBricks from "Application/SearchBricks";
import { githubDb } from "@db-man/github";

const dbName = "brickdb";

export default function SearchBricksWrapper() {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({
    priceHistories: [],
    productNotes: [],
    purchaseHistories: [],
    sets: [],
  });

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    Promise.all(
      ["price_histories", "product_notes", "purchase_histories", "sets"].map(
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
