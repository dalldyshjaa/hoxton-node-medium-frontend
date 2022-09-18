import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleT } from "../types";
import { Comments } from "./Comments";

let logedInUser = {
  userID: 1,
  usename: "dalldyshjaa",
};

export function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState([]);
  //   @ts-ignore
  let user = article.user;
  //   console.log(user.avatar);
  useEffect(() => {
    fetch(`http://localhost:3002/@${params.authorID}/${params.postID}`)
      .then((resp) => resp.json())
      .then((articleFromServer) => {
        setArticle(articleFromServer);
      });
  }, []);

  return article.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <div className="article-page-profile-unit">
        <img src={user.avatar} alt="" className="article-page-profile-avatar" />
        <p>{user.fullName}</p>
      </div>
      {/* @ts-ignore */}
      <h1>{article.title}</h1>
      {/* @ts-ignore */}
      <div>{article.text}</div>
      <div
        className="article-clap"
        onClick={() => {
          /* @ts-ignore */

          fetch(
            `http://localhost:3002/like/${logedInUser.userID}/${article.id}`,
            {
              method: "POST",
            }
          );
        }}
      >
        Clap this...
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            console.log(e.target.comment.value);
            fetch(
              `http://localhost:3002/comment/${logedInUser.userID}/${article.id}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // @ts-ignore
                  comment_text: e.target.comment.value,
                  userID: user.id,
                  // @ts-ignore
                  postID: article.id,
                }),
              }
            );
          }}
        >
          <input type="text" name="comment" />
          <input type="submit" />
        </form>
      </div>
      <div className="comments-container">
        {/* @ts-ignore */}
        <Comments postID={Number(article.id)} />
      </div>
    </div>
  );
}
