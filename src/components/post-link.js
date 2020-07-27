import React from "react"
import { Link } from "gatsby"



const PostLink = ({ post }) => (
  <article className="card ">
    <div clasName="fill"><Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link></div>
    <div>
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
