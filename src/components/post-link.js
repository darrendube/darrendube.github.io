import React from "react"
import { Link } from "gatsby"



const PostLink = ({ post }) => (
  <article className="card ">
    <div className="fill"><Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img className="card-image" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link></div>
    <div className="post-details">
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </div>
  </article>
)
export default PostLink
