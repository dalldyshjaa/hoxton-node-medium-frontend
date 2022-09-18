export function Comment({ comment }: any) {
  return (
    <div className="comment">
      <img src={comment.user.avatar} alt="" className="comment-profile" />
      <div>
        <div className="comment-profile-name-container">
          <p>{comment.user.fullName}</p>
          <p className="comment-username">@{comment.user.username}</p>
        </div>
        <div className="comment-text">{comment.comment_text}</div>
      </div>
    </div>
  );
}
