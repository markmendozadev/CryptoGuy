import React, { useState } from "react";
import CoinItem from "../components/CoinItem";
import CoinTable from "../components/CoinTable";
import Spinner from "../components/Spinner";
import useCustomSWR from "../hooks/useCustomSWR";

const CoinPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useCustomSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageIndex}&sparkline=false`
  );

  if (!data) {
    return <Spinner />;
  }
  return (
    <>
      <div className="table__container">
        <CoinTable>
          {data.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </CoinTable>
      </div>
      <div className="button__container">
        {pageIndex > 1 && (
          <button
            disabled={pageIndex <= 1 ? true : false}
            onClick={() => {
              setPageIndex((prevState) => prevState - 1);
            }}
          >
            Previous
          </button>
        )}
        <div>Page: {pageIndex}</div>
        <button
          onClick={() => {
            setPageIndex((prevState) => prevState + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CoinPage;
