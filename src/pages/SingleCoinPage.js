import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import "../styles/SingleCoinPage.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SingleCoinPage = () => {
  const params = useParams();
  const category = params.coinsId;
  const { data } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${params.coinsId}?localization=false&tickers=false&market_data=true&developer_data=true&sparkline=false
  `,
    fetcher
  );
  if (!data) {
    return <Spinner />;
  }
  return (
    <div className="container" style={{ display: "flex", textAlign: "center" }}>
      <Card>
        <div className="title_container">
          <img src={data.image.small} alt={data.name} />
          <h2>{data.name.toUpperCase()}</h2>
          <span>({data.symbol.toUpperCase()})</span>
        </div>
        <div className="body__container">
          <h4>${data.market_data.current_price.usd.toLocaleString()}</h4>
          <p>
            Market Cap:
            <span>${data.market_data.market_cap.usd.toLocaleString()}</span>
          </p>
          <p>
            Max Supply:
            {data.market_data.max_supply ? (
              `$${data.market_data.max_supply.toLocaleString()}`
            ) : (
              <span style={{ fontSize: "1.5rem" }}>∞</span>
            )}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SingleCoinPage;
