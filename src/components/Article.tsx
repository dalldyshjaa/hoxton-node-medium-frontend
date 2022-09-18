import { Link } from "react-router-dom";

export function Article({ article }: any) {
  return (
    <Link to={`/@${article.user.username}/${article.id}`}>
      <div>
        <div className="article-profile-unit">
          <img
            src={`${article.user.avatar}`}
            alt=""
            className="article-profile-avatar"
          />
          <p className="article-profile-name">{article.user.fullName}</p>
        </div>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-text-content">{article.text}</p>
      </div>
      <div>
        <img src={article.img} alt="" className="article-image" />
      </div>
    </Link>
  );
}
