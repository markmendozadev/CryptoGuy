import React from "react";
import useSWR from "swr";
import axios from "axios";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Masonry from "react-masonry-css";

import "../styles/Homepage.css";

const fetcher = (url, page, category, page_size) =>
  axios
    .get(url, {
      params: { q: category, lang: "en", page, page_size },
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_APIKEY,
      },
    })
    .then((res) => res.data);

const category = "Cryptocurrency";
const page = 1;
const page_size = 24;
const HomePage = () => {
  const { data } = useSWR(
    ["https://free-news.p.rapidapi.com/v1/search", page, category, page_size],
    fetcher
  );
  if (!data) {
    return <Spinner />;
  }
  console.log(data);
  return (
    <div className="container">
      <h2>Latest News About {category} </h2>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.articles.map((article, index) => (
          <Card key={index}>
            <img
              src={article.media}
              alt={article.title}
              width="100%"
              height="300px"
            />
            <h4>{article.title}</h4>
            <div>{article.summary}</div>
          </Card>
        ))}
      </Masonry>
    </div>
  );
};

export default HomePage;
