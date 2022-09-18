import { useEffect, useState } from "react";
import { Article } from "./Article";
import { ArticleT } from "../types";

export function ArticleContainer() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/feed")
      .then((resp) => resp.json())
      .then((feedFromServer) => {
        setArticles(feedFromServer);
        console.log(feedFromServer);
      });
  }, []);

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
}
