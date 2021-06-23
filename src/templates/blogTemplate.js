import React, { useState, useEffect, createRef} from "react"
import Helmet from 'react-helmet';
import { graphql, Link , GatsbyLink } from "gatsby"
import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar, FaClock } from "react-icons/fa"
import ShareButtons from "../components/share"
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer , MDXProvider } from "gatsby-plugin-mdx"
import ExternalLink from "../components/link"
import { Heading, Text, HStack } from "@chakra-ui/react"


import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();







export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, mdx } = data 
  const { siteMetadata } = site
  const { frontmatter, body, fields } = mdx
  


  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={mdx.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:title" content={frontmatter.title}/>
        <meta property="og:description" content={frontmatter.intro ? frontmatter.intro : mdx.excerpt}/>
        <meta property="og:image" content={"https://darrendube.com/assets/"+frontmatter.ogimage}/>
        <meta property="og:url" content={"https://darrendube.com" + frontmatter.path}/>

      </Helmet>


      <div className="blog-post-container">
    
        <article className="post">

          <div className="post-header ">
            <div className="header-wrapper post-grid">
              {!!frontmatter.thumbnail && (
                <GatsbyImage
                  image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                  className="post-thumbnail grid-item1" 
                  placeholder="dominantColor"/>
               
              )}

              <div className="post-info grid-item2">
                <div className="type-category">
                  <div className="post-type"> {frontmatter.type} </div>
                  <Link to={"/blog/" + frontmatter.category.replace(" ", "-")}><div className="category"> {frontmatter.category} </div></Link>
                </div>
                <Heading className="post-title blue-grey-heading">{frontmatter.title}</Heading>




                {!!frontmatter.intro && (
                  <div className="post-intro"> {frontmatter.intro}
                  </div>
                )}
                <div className="post-meta"><HStack>
<HStack>
                  <FaCalendar />
            &nbsp;&nbsp;<Text>{frontmatter.date}</Text>&nbsp;&nbsp;&nbsp;&nbsp;</HStack>

            <HStack>
            <FaClock />
            &nbsp;&nbsp;<Text>{Math.round(fields.readingTime.minutes)} minute read</Text> </HStack></HStack>
            </div>
                <div className="post-meta"><ShareButtons path={"https://darrendube.com" + frontmatter.path} title={frontmatter.title} /></div>
              </div>
            </div>
          </div>

    

          <div className="blog-post-content"><MDXRenderer className="blog-post-content">{body}</MDXRenderer></div>

          <SubscribeSection />
          
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`query ($path: String!) {
  site {
    siteMetadata {
      title
    }
  }
  mdx(frontmatter: {path: {eq: $path}}) {
    body
    excerpt(pruneLength: 200)
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
      ogimage
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      category
      type
      intro
    }
    fields {
      readingTime {
        minutes
      }
    }
  }
}
`


