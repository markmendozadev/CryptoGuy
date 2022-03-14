import React from "react";

import Card from "../components/Card";
import Spinner from "../components/Spinner";

import classes from "./Homepage.module.css";
import useCustomSWR from "../hooks/useCustomSWR";

const category = "Cryptocurrency";
const page = 1;
const page_size = 24;
const params = { q: category, lang: "en", page, page_size };
const headers = {
  "x-rapidapi-host": "free-news.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_RAPID_APIKEY,
};

const HomePage = () => {
  const { data, error } = useCustomSWR(
    "https://free-news.p.rapidapi.com/v1/search",
    params,
    headers
  );

  if (!data) {
    return <Spinner />;
  }
  console.log(data);
  return (
    <div className="container">
      <h2>Latest News About {category} </h2>
      <div className="masonary">
        {data.articles.map((article, index) => (
          <Card key={index}>
            <img
              src={article.media}
              alt={article.title}
              width="100%"
              height="300px"
            />
            <span>{article.topic}</span>
            <span>{article.twitter_account}</span>
            <h4>{article.title}</h4>
            <div className="">{article.summary}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
