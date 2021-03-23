import React from "react"
import { Link , navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaCalendar , FaClock} from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"




const PostLink = ({ post }) => (
  <div className="card " onClick={() => navigate(post.frontmatter.path)}>
    <div className="fill"><Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <GatsbyImage
          image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          className="card-image"
          alt={post.frontmatter.title + "- Featured Shot"} 
          placeholder="dominantColor"
          />
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
      <div className="post-meta"><p className="blue-grey-text bold"><FaCalendar/>&nbsp;&nbsp;{post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;<FaClock/>&nbsp;&nbsp;{Math.round(post.fields.readingTime.minutes)} minute read</p>
      
      <p>{post.excerpt}</p></div>
    </div>
  </div>
)


export default PostLink

