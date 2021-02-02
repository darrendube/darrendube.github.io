import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaCalendar , FaClock} from "react-icons/fa"



const PostLink = ({ post }) => (
  <article className="card ">
    <div className="fill"><Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img className="card-image" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link></div>
    <div className="post-details">
    <div className="type-category"> 
      <div className="post-type"> {post.frontmatter.type} </div>



    {!!post.frontmatter.category && (
    <div className="category"> {post.frontmatter.category} </div>
    )}

</div>
      <h2 className="post-title blue-grey-heading">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta"><p className="blue-grey-text bold"><FaCalendar/>&nbsp;&nbsp;{post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;<FaClock/>&nbsp;&nbsp;2 minute read</p>
      
      <p>{post.excerpt}</p></div>
    </div>
  </article>
)

export default PostLink

