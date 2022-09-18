import { useEffect, useState } from "react";
import { Comment } from "./Comment";

export function Comments({ postID }: any) {
  const [comments, setComments] = useState([]);
  console.log(comments);
  useEffect(() => {
    fetch(`http://localhost:3002/comments/${postID}`)
      .then((resp) => resp.json())
      .then((commentsFromServer) => {
        setComments(commentsFromServer);
      });
  }, []);
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
}
