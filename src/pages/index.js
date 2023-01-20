import React from "react"
import Helmet from 'react-helmet';
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

import {Box, chakra, Text, useColorModeValue} from "@chakra-ui/react"
import SubscribeForm from "../components/subscribe-form";
import {StaticImage} from "gatsby-plugin-image";

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
        <meta name="description" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://darrendube.com/icon.png"}/>
        <meta property="og:title" content={site.siteMetadata.title}/>
        <meta property="og:description" content=""/>
        
        <meta property="og:url" content="https://darrendube.com"/>
      </Helmet>




        <Box bg={useColorModeValue("#ffffff", "#000000")} className="hero-header" paddingTop="100px">
            <div className="items-wrapper hero-grid">
                <div className="hero-text">
                    <Text className="headline" fontFamily="Open Sans" fontWeight="800" color={useColorModeValue("#000000","#ffffff")}>Hi!<br/> I'm <chakra.span color={useColorModeValue("#68D391","#a0aec0")}>Darren</chakra.span></Text>
                    <chakra.div color={useColorModeValue("#000000","#ffffff")}
                                className="primary-content" >Data Scientist and blogger. Subscribe Now: </chakra.div><SubscribeForm /></div>
                <div className="hero-image">

                    <StaticImage
                        src="../images/data-image.png"
                        alt="data-image"

                    />



                </div>


            </div>
        </Box>

      <Box className="posts-section" bg={useColorModeValue("#ffffff","#000000")}>
      <Box className="blog-posts-wrapper">

     
     
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
