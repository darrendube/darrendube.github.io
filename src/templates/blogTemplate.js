import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {GatsbyImage} from "gatsby-plugin-image";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import CustomLink from "../components/link";
import {Box, chakra, Code, Heading, Text, useColorModeValue} from "@chakra-ui/react";


require("prismjs/themes/prism-tomorrow.css")


const components = {
    h1: (props) => (
        <Heading
            mt="48px"
            mr="32px"
            mb="24px"
            ml="32px"
            textAlign="center"
            {...props}
            color={() => useColorModeValue("#2e3748", "#ffffff")}
        />
    ),
    h2: (props) => (
        <Heading
            mt="48px"
            mr="32px"
            mb="24px"
            ml="32px"
            {...props}
            fontSize="4xl"
            color={() => useColorModeValue("#2e3748", "#ffffff")}
        />
    ),
    h3: (props) => (
        <Heading
            mt="48px"
            mr="32px"
            mb="24px"
            ml="32px"
            {...props}
            fontSize="3xl"
            color={() => useColorModeValue("#2e3748", "#ffffff")}
        />
    ),
    h4: (props) => (
        <Heading
            mt="48px"
            mr="32px"
            mb="24px"
            ml="32px"
            {...props}
            fontSize="2xl"
            color={() => useColorModeValue("#2e3748", "#ffffff")}
        />
    ),
    a: (props) => <CustomLink {...props} />,
    p: (props) => (
        <Text
            size="20px"
            py={1}
            mr="32px"
            mb="10px"
            ml="32px"
            lineHeight="1.6"
            {...props}
            fontFamily="Montserrat, Arial"
            fontWeight="450"
            color={() => useColorModeValue("#242729", "#ffffff")}
        />
    ),
    ul: (props) => (
        <chakra.ul
            size="20px"
            p={5}
            pl="16px"
            mr="32px"
            ml="32px"
            lineHeight="1.6"
            {...props}
            fontFamily="Montserrat"
            color={() => useColorModeValue("#242729", "#ffffff")}
        />
    ),
    ol: (props) => (
        <chakra.ol
            size="20px"
            p={5}
            pl="16px"
            mr="32px"
            ml="32px"
            lineHeight="1.6"
            {...props}
            fontFamily="Montserrat"
            color={() => useColorModeValue("#242729", "#ffffff")}
        />
    ),
    li: (props) => (
        <chakra.li size="20px !important" {...props} pb={1} fontFamily="Montserrat"
                   color={() => useColorModeValue("#242729", "#ffffff")}/>
    ),
    pre: (props) => <chakra.pre borderRadius="lg" {...props} />,
    img: (props) => (
        <chakra.figure>
            <chakra.img

                my={5}
                maxH={500}
                borderColor="gray.200"
                {...props}

            />
            <chakra.figcaption color="gray.400" fontFamily="Inter" fontSize="xs"
                               mt="-10px">{props.title}</chakra.figcaption>
        </chakra.figure>
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
    const {site, mdx} = data;
    const {siteMetadata} = site;
    const {frontmatter, body, fields} = mdx;

    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content={mdx.excerpt}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@darrendube"/>
                <meta name="twitter:creator" content="@darrendube"/>
                <meta property="og:title" content={frontmatter.title}/>
                <meta
                    property="og:description"
                    content={frontmatter.intro ? frontmatter.intro : mdx.excerpt}
                />
                <meta
                    property="og:image"
                    content={"https://darrendube.com/assets/" + frontmatter.ogimage}
                />
                <meta
                    property="og:url"
                    content={"https://darrendube.com" + frontmatter.path}
                />
            </Helmet>

            <div className="blog-post-container">
                <chakra.article className="post" bg={useColorModeValue("#ffffff", "#000000")}
                                color={useColorModeValue("#000000", "#ffffff !important")}>
                    <Box className="post-header " background={{
                        base: useColorModeValue(frontmatter.color+'00',"ffffff"),
                        md: useColorModeValue("#ffffff"),
                    }}>
                        <div className="header-wrapper post-grid">


                            <chakra.div className="post-info grid-item2">
                                <div className="inner-post-info">
                                    <Box height="15px"></Box>
                                    <chakra.div className="type-category">

                                        <Link to={"/blog/" + frontmatter.category.replace(" ", "-")}>
                                            <chakra.div color={useColorModeValue(frontmatter.color+'cc', "#50b197")}
                                                        className="category"
                                                        fontSize="1.5em"> {frontmatter.category} </chakra.div>
                                        </Link> <Text ms="0px !important"
                                        color={useColorModeValue("#000000","#ffffff")}>&nbsp;&nbsp;{frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                    </chakra.div>
                                    <Heading mt="20px" mb="30px" fontWeight="800" fontSize="6xl" className="post-title"
                                        color={useColorModeValue("#000000", "#ffffff")}>
                                        {frontmatter.title}
                                    </Heading>


                                    <Text mb="10px" fontSize="1.7rem" fontWeight="500"
                                          color={useColorModeValue(frontmatter.color+'cc', "#ffffffa0")}> {!!frontmatter.intro && (frontmatter.intro)}</Text>

                                    <div className="post-meta">

                                    </div>

                                </div>
                            </chakra.div>

                            {!!frontmatter.thumbnail && (
                                <GatsbyImage

                                    image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                                    className="post-thumbnail grid-item1"
                                    placeholder="dominantColor"
                                    class="post-thumbnail"
                                   
                                />
                            )}
                        </div>
                    </Box>

                    <div className="blog-post-content">
                        <MDXProvider components={components}>
                            <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
                        </MDXProvider>
                    </div>


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
        color
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;
