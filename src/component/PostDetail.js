import React from "react";

function PostDetail(props) {
  console.log("post detail props", props);
  const { postDetail, progress } = props;
  console.log("postDetail", postDetail);

  return (
    <div className="post-details-container">
      {progress === true ? (
        <div>
          <h1>Loading Post Details Please Wait....</h1>
        </div>
      ) : (
        <div className="post-details">
          <h2>{postDetail.heading}</h2>
          <ul className="response">
            {postDetail.response.map((text, i) => (
              <li className="response-list" key={i}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
