import React from "react"
import PropTypes from "prop-types"

import PostLink from "../components/post-link"
import Helmet from 'react-helmet';

import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar , FaClock} from "react-icons/fa"



// Components
import { Link, graphql } from "gatsby"
import { chakra, Text, Box, useColorModeValue } from "@chakra-ui/react";

/*
const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />) */

const Tags = ({ pageContext, data }) => {
  
  const { edges, totalCount } = data.allMdx
  const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  const Category = pageContext.tag
  const description = "Read articles under the "+{Category}+"category. Find answers to your most burning coding questions, in under 5 minutes. Making your coding journey easier! "

  return (
    <Layout>
      <Helmet>
        <title>{Category} Category - Darren Dube</title>
        <meta property="og:title" content={Category + " Category - Darren Dube"}/>
        <meta name="description" content="Read articles under the" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://neocapitalist.darrendube.com/icon.png"}/>
      </Helmet>
      <Box  maxWidth="100%" bg={useColorModeValue("#0033a0","#091224")}><div className="cat-header-wrapper items-wrapper"><Text as="strong" color="white">BLOG / </Text><Text fontWeight="bold" color="white" className="category-title">{Category}</Text></div></Box>
      <Box className="posts-section" bg={useColorModeValue("#f3f3f3","#000000")}>

      <div className="items-wrapper">

      
     
      <div className="grids">
        {Posts}
      </div></div></Box></Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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

export const pageQuery = graphql`query ($tag: String) {
  allMdx(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {in: [$tag]}}}) {
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
          thumbnail {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
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