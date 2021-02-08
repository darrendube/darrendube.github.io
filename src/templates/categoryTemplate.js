import React from "react"
import PropTypes from "prop-types"

import PostLink from "../components/post-link"
import Helmet from 'react-helmet';

import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar , FaClock} from "react-icons/fa"


// Components
import { Link, graphql } from "gatsby"

/*
const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />) */

const Tags = ({ pageContext, data }) => {
  
  const { edges, totalCount } = data.allMarkdownRemark
  const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  const Category = pageContext.tag

  return (
    <Layout>
      <Helmet>
        <title>Category | Darren Dube</title>
        <meta name="description" content="" />

      </Helmet>
      <div className="category-header "><div className="cat-header-wrapper items-wrapper"><h5 className="category-breadcrumb">BLOG / </h5><h2 className="category-title">{Category}</h2></div></div>
    <div className="posts-section">

      <div className="items-wrapper">

      
     
      <div className="grids">
        {Posts}
      </div></div></div></Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
         
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            category
            type
          }
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`