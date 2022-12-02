import {Box, chakra, Code, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import CustomLink from "./link";
import Layout from "./layout";
import Helmet from "react-helmet";
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {MDXProvider} from "@mdx-js/react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import SubscribeSection from "./subscribe-section";
import React from "react";

const components = {
    h1: (props) => (
        <Heading
            mt="48px"
            mr="32px"
            mb="24px"
            ml="32px"
            textAlign="center"
            {...props}
            color={() => useColorModeValue("#2e3748","#ffffff")}
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
            color={() => useColorModeValue("#2e3748","#ffffff")}
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
            color={() => useColorModeValue("#2e3748","#ffffff")}
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
            color={() => useColorModeValue("#2e3748","#ffffff")}
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
            color={() => useColorModeValue("#242729","#ffffff")}
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
            color={() => useColorModeValue("#242729","#ffffff")}
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
            color={() => useColorModeValue("#242729","#ffffff")}
        />
    ),
    li: (props) => (
        <chakra.li size="20px !important" {...props} pb={1} fontFamily="Montserrat" color={() => useColorModeValue("#242729","#ffffff")} />
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
            <chakra.figcaption color="gray.400" fontFamily="Inter" fontSize="xs" mt="-10px">{props.title}</chakra.figcaption>
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

const Project = (props) => {

    return (
        <Layout>
            <Helmet>
                <title>Project</title>



            </Helmet>

            <div className="blog-post-container">
                <chakra.article className="post" bg={useColorModeValue("#ffffff","#000000")} color={useColorModeValue("#000000","#ffffff !important")}>
                    <Box className="post-header " background={useColorModeValue(props.themecolor,"#000000")}>
                        <div className="header-wrapper post-grid">


                            <chakra.div className="post-info grid-item2"  >
                                <div className="inner-post-info">
                                    <Box height="15px"></Box>
                                    <chakra.div className="type-category" >

                                        <Link to={"/blog/projects"}>
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

                    <SubscribeSection />
                </chakra.article>
            </div>
        </Layout>
    );
}

export default Project