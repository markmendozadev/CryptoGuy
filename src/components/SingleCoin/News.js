import Card from "../Card";
import classes from "./News.module.css";
const News = (props) => {
  const { data } = props;

  return (
    <div className={classes.article__container}>
      {data.articles.map((article, index) => (
        <div key={index}>
          <Card style={{ width: "100%" }}>
            {article.media ? (
              <div className={classes.image_container}>
                <img src={article.media} alt={article.title} />
              </div>
            ) : (
              ""
            )}
            <div className={classes.content}>
              <div className={classes.category}>{article.topic}</div>
              <h3>
                <a
                  href={article.link}
                  className={classes.article__link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.title}
                </a>
              </h3>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default News;
