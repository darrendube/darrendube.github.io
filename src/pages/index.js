import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import {Heading, Box, useColorModeValue} from "@chakra-ui/react"

const IndexPage = ({
  data: {
    site,
    allMdx: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content="A blog that explores and simplifies the big, complex Economic machine - making your Economics journey easier!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://neocapitalist.darrendube.com/icon.png"}/>
        <meta property="og:title" content={site.siteMetadata.title}/>
        <meta property="og:description" content="A blog that explores and simplifies the big, complex Economic machine - making your Economics journey easier!"/>
        
        <meta property="og:url" content="https://neocapitalist.darrendube.com"/>
      </Helmet>


      <HeroHeader/>
      <Box className="posts-section" bg={useColorModeValue("#f5f9fb","#06121f")}>
      <Box className="items-wrapper">

      
      <Heading size="lg">Blog Posts &darr;</Heading>
      <Box className="grids">
        {Posts}
      </Box></Box></Box>

    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
