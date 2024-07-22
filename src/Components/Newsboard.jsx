import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <div className="px-2 py-5">
        <h2 className="text-light px-3">
          Latest <span className="badge bg-primary"> News</span>
        </h2>
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default Newsboard;
