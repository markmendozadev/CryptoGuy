import React from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

import classes from "./Homepage.module.css";
import useCustomSWR from "../hooks/useCustomSWR";
import Container from "../components/Layout/Container";

const category = "Cryptocurrency";
const page = 1;
const page_size = 24;
const params = { q: category, lang: "en", page, page_size };
const headers = {
  "x-rapidapi-host": "free-news.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_RAPID_APIKEY,
};

const HomePage = () => {
  const { data } = useCustomSWR(
    "https://free-news.p.rapidapi.com/v1/search",
    params,
    headers
  );

  if (!data) {
    return <Spinner />;
  }
  return (
    <Container>
      <h2 className={classes.main_title}>Latest News About {category} </h2>
      <div className={classes.masonary}>
        {data.articles.map((article, index) => (
          <div key={index}>
            <Card>
              {article.media ? (
                <img
                  className={classes.image}
                  src={article.media}
                  alt={article.title}
                />
              ) : (
                ""
              )}
              <div className={classes.content}>
                <span>{article.twitter_account}</span>
                <h2>
                  <a
                    href={article.link}
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.title}
                  </a>
                </h2>
                <div className={classes.summary}>{article.summary}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
