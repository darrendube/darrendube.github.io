import React from "react";

const Comment = ({ commentBox }) => (
    <div className="comments-section-wrapper">
      <div className="inner-section">
  <h2>Comments</h2>  
  <div ref={commentBox} className="comments"></div></div></div>
);

export default Comment;


