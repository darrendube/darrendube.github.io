import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

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
        <meta name="description" content="Find answers to your most burning coding questions, in under 5 minutes. Making your coding journey easier!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://darrendube.com/assets/icon.png"}/>
        <meta property="og:title" content={site.siteMetadata.title}/>
        <meta property="og:description" content="Find answers to your most burning coding questions, in under 5 minutes. Making your coding journey easier!"/>
        
        <meta property="og:url" content="https://darrendube.com"/>
      </Helmet>


      <HeroHeader/>
      <div className="posts-section">
      <div className="items-wrapper">

      
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div></div></div>

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
