import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem.jsx";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dd47bc660eaf44d4b1d6c34697d9ee1a`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
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
  );
};

export default NewsBoard;
