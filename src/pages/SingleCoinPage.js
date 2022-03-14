import React from "react";
import { useParams } from "react-router-dom";

import Coin from "../components/SingleCoin/Coin";
import Spinner from "../components/Spinner";
import useCustomSWR from "../hooks/useCustomSWR";
import "../styles/SingleCoinPage.css";
import Container from "../components/Layout/Container";
import News from "../components/SingleCoin/News";

const SingleCoinPage = () => {
  const params = useParams();
  const category = params.coinsId;
  const categoryFirstUpperCase =
    category.charAt(0).toUpperCase() + category.slice(1);

  const { data: coinData } = useCustomSWR(
    `https://api.coingecko.com/api/v3/coins/${category}?localization=false&tickers=false&market_data=true&developer_data=true&sparkline=false
  `
  );

  const page = 1;
  const page_size = 24;
  const paramsData = { q: categoryFirstUpperCase, lang: "en", page, page_size };
  const headers = {
    "x-rapidapi-host": "free-news.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_APIKEY,
  };
  const { data: newsData } = useCustomSWR(
    "https://free-news.p.rapidapi.com/v1/search",
    paramsData,
    headers
  );

  if (!coinData) {
    return <Spinner />;
  }
  if (!newsData) {
    return <Spinner />;
  }
  return (
    <Container>
      <Coin data={coinData} />
      {newsData.status === "ok" ? (
        <div>
          <h1 style={{ margin: "2rem" }}>
            Latest News About {categoryFirstUpperCase}
          </h1>

          <News data={newsData} />
        </div>
      ) : (
        <h2>No posts related..</h2>
      )}
    </Container>
  );
};

export default SingleCoinPage;
