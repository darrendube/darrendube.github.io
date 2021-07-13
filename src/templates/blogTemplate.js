import React, { useState, useEffect, createRef } from "react";
import Helmet from "react-helmet";
import { graphql, Link, GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import SubscribeSection from "../components/subscribe-section";
import { FaCalendar, FaClock } from "react-icons/fa";
import ShareButtons from "../components/share";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import ExternalLink from "../components/link";
import { Heading, Text, HStack, chakra, Code, Box, useColorModeValue } from "@chakra-ui/react";
import CustomLink from "../components/link";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const components = {
  h1: (props) => (
    <Heading
      mt="48px"
      mr="18px"
      mb="24px"
      ml="18px"
      textAlign="center"
      {...props}
      color={() => useColorModeValue("#2e3748","#ffffff")}
    />
  ),
  h2: (props) => (
    <Heading
      mt="48px"
      mr="18px"
      mb="24px"
      ml="18px"
      {...props}
      fontSize="4xl"
      color={() => useColorModeValue("#2e3748","#ffffff")}
    />
  ),
  h3: (props) => (
    <Heading
      mt="48px"
      mr="18px"
      mb="24px"
      ml="18px"
      {...props}
      fontSize="3xl"
      color={() => useColorModeValue("#2e3748","#ffffff")}
    />
  ),
  h4: (props) => (
    <Heading
      mt="48px"
      mr="18px"
      mb="24px"
      ml="18px"
      {...props}
      fontSize="2xl"
      color={() => useColorModeValue("#2e3748","#ffffff")}
    />
  ),
  a: (props) => <CustomLink {...props} />,
  p: (props) => (
    <Text
      size="20px"
      py={1}
      mr="18px"
      mb="10px"
      ml="18px"
      lineHeight="1.6"
      {...props}
    />
  ),
  ul: (props) => (
    <chakra.ul
      size="20px"
      p={5}
      pl="16px"
      mr="18px"
      ml="18px"
      lineHeight="1.6"
      {...props}
    />
  ),
  ol: (props) => (
    <chakra.ol
      size="20px"
      p={5}
      pl="16px"
      mr="18px"
      ml="18px"
      lineHeight="1.6"
      {...props}
    />
  ),
  li: (props) => (
    <chakra.li size="20px !important" {...props} pb={1}  />
  ),
  pre: (props) => <chakra.pre borderRadius="lg" {...props} />,
  img: (props) => (
    <chakra.img
      rounded="lg"
      my={5}
      maxH={500}
      borderColor="gray.200"
      {...props}
    />
  ),

  inlineCode: (props) => (
    <Code
      fontSize="md"
      fontFamily="monospace"
      rounded="lg"
      letterSpacing={0.1}
      px={2}
      {...props}
      colorScheme="orange"
    />
  ),
  blockquote: (props) => (
    <chakra.blockquote
      px={3}
      borderLeft={4}
      borderLeftColor="green.400"
      {...props}
    />
  ),
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, mdx } = data;
  const { siteMetadata } = site;
  const { frontmatter, body, fields } = mdx;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={mdx.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:title" content={frontmatter.title} />
        <meta
          property="og:description"
          content={frontmatter.intro ? frontmatter.intro : mdx.excerpt}
        />
        <meta
          property="og:image"
          content={"https://neocapitalist.darrendube.com/assets/" + frontmatter.ogimage}
        />
        <meta
          property="og:url"
          content={"https://neocapitalist.darrendube.com" + frontmatter.path}
        />
      </Helmet>

      <div className="blog-post-container">
        <chakra.article className="post" bg={useColorModeValue("#ffffff","#0e182a")} color={useColorModeValue("#000000","#ffffff !important")}>
          <Box className="post-header " bg={useColorModeValue("linear-gradient(to bottom, #f5f9fb 0%, #e9f1ff 100%)","linear-gradient(to bottom, #14223d 0%, #1c2e53 100%)")}>
            <div className="header-wrapper post-grid">
              {!!frontmatter.thumbnail && (
                <GatsbyImage
                  image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                  className="post-thumbnail grid-item1"
                  placeholder="dominantColor"
                />
              )}

              <div className="post-info grid-item2">
                <div className="type-category">
                  <div className="post-type"> {frontmatter.type} </div>
                  <Link to={"/blog/" + frontmatter.category.replace(" ", "-")}>
                    <div className="category"> {frontmatter.category} </div>
                  </Link>
                </div>
                <Heading mb="30px" className="post-title" color={useColorModeValue("#2e3748","#ffffff")}>
                  {frontmatter.title}
                </Heading>

               
                  <Text fontStyle="italic" fontWeight="500" color={useColorModeValue("#33475b","#ffffff")}> {!!frontmatter.intro && (frontmatter.intro)}</Text>
                
                <div className="post-meta">
                  <HStack>
                    <HStack>
                      <FaCalendar color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}/>
                      &nbsp;&nbsp;<Text color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>{frontmatter.date}</Text>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </HStack>

                    <HStack>
                      <FaClock color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}/>
                      &nbsp;&nbsp;
                      <Text color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>
                        {Math.round(fields.readingTime.minutes)} minute read
                      </Text>{" "}
                    </HStack>
                  </HStack>
                </div>
                <div className="post-meta">
                  <ShareButtons
                    path={"https://neocapitalist.darrendube.com" + frontmatter.path}
                    title={frontmatter.title}
                  />
                </div>
              </div>
            </div>
          </Box>

          <div className="blog-post-content">
            <MDXProvider components={components}>
              <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
            </MDXProvider>
          </div>

          <SubscribeSection />
        </chakra.article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
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
`;
