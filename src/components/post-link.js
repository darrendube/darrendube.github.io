import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const PostLink = ({ post }) => (
  <article className="card ">
    <div className="fill"><Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img className="card-image" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link></div>
    <div className="post-details">
      <div className="category"> Category </div>
      <h2 className="post-title blue-grey-heading">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta"><p className="blue-grey-text bold">{post.frontmatter.date}</p></div>
    </div>
  </article>
)
export default PostLink
