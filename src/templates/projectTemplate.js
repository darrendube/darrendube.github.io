import {Box, chakra, Code, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import CustomLink from "../components/link";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {MDXProvider} from "@mdx-js/react";
import {MDXRenderer} from "gatsby-plugin-mdx";

import React from "react";

const ProjectTemplate = (props) => {

    return (
        <Layout>
            <Helmet>
                <title>Project</title>


                <meta name="description" content={props.intro} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@darrendube" />
                <meta name="twitter:creator" content="@darrendube" />
                <meta property="og:title" content={props.title} />
                <meta
                    property="og:description"
                    content={props.intro}
                />
                {/*<meta
                    property="og:image"
                    content={"https://darrendube.com/assets/" + frontmatter.ogimage}
                />*/}
                <meta
                    property="og:url"
                    content={"https://darrendube.com/projects/" + props.slug}
                />
            </Helmet>

            <chakra.div className="blog-post-container">
                <chakra.article className="post" bg={useColorModeValue("#ffffff","#000000")} color={useColorModeValue("#000000","#ffffff !important")}>
                    <Box className="post-header " background={useColorModeValue(props.themecolor,"#000000")}>
                        <div className="header-wrapper post-grid">


                            <chakra.div className="post-info grid-item2"  >
                                <div className="inner-post-info">
                                    <Box height="15px"></Box>
                                    <chakra.div className="type-category" >

                                        <Link to={"/projects"}>
                                            <chakra.div color={useColorModeValue("#ffffff","#50b197")} className="category" fontSize="1.5em"> Project </chakra.div>
                                        </Link> <Text  ms="0px !important" color="#ffffff">&nbsp;&nbsp;{props.date}&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                    </chakra.div>
                                    <Heading mt="20px" mb="30px" fontWeight="800" fontSize="6xl" className="post-title" color={useColorModeValue("#ffffff","#ffffff")} >
                                        {props.title}
                                    </Heading>


                                    <Text mb="10px" fontSize="1.7rem" fontWeight="500" color={useColorModeValue("#ffffffa0","#ffffffa0")}> {props.intro} </Text>

                                    <div className="post-meta">

                                    </div>

                                </div>
                            </chakra.div>


                        </div>
                    </Box>

                    <chakra.div className="blog-post-content" >
                        {props.children}
                    </chakra.div>


                </chakra.article>
            </chakra.div>
        </Layout>
    );
}

export default ProjectTemplate