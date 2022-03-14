import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import useCustomSWR from "../hooks/useCustomSWR";
import classes from "./Search.module.css";
import Spinner from "./Spinner";

import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { data } = useCustomSWR(
    "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
  );

  const handleOnSelect = (item) => {
    navigate(`/coins/${item.id}`);
  };

  const formatResult = (item) => {
    if (!data) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }

    return (
      <div className={classes.result}>
        <span className="result-span">{item.name}</span>
      </div>
    );
  };

  return (
    <div className={classes.search}>
      <ReactSearchAutocomplete
        items={data}
        onSelect={handleOnSelect}
        formatResult={formatResult}
        placeholder="Search for coin"
      />
    </div>
  );
};

export default Search;
