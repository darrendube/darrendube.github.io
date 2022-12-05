import Layout from "../components/layout";
import Helmet from "react-helmet";
import {Box, chakra, Heading, Text, useColorModeValue, UnorderedList, ListItem, } from "@chakra-ui/react";
import {Link} from "gatsby";
import React from "react";


const Projects = () => {
    return (
        <Layout>
            <Helmet>
                <title>Projects - Darren Dube</title>
                <meta name="description" content="On my website, accessible from darrendube.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information collected and recorded by this website and how we use it." />

                <meta property="og:title" content="Projects - Darren Dube"/>
                <meta property="og:description" content="On our website, accessible from darrendube.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information collected and recorded by this website and how we use it."/>
                <meta property="og:url" content="https://darrendube.com/projects"/>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@darrendube" />
                <meta name="twitter:creator" content="@darrendube" />
                <meta property="og:image" content={"https://darrendube.com/icon.png"}/>


            </Helmet>
            <Box  maxWidth="100%" paddingTop="100px" bg={useColorModeValue("#0033a0","#091224")}><div className="cat-header-wrapper items-wrapper"><Text fontWeight="bold" color="white" className="category-title">Projects</Text></div></Box>
            <div className="posts-section">

                <div className="items-wrapper blog-post-content">
                    <p> A collection of small, interactive Data Science projects. Click on an item to explore.</p><br/>
                    <p> (If any of them are broken or outdated, please <chakra.a color="#3182CE !important"><Link to={"/contact"}>notify me</Link></chakra.a>.)</p><br/>

                    <UnorderedList>
                        <ListItem><chakra.a color="#3182CE !important"><Link to='/projects/titanic-dataset'>Titanic dataset project</Link></chakra.a></ListItem>
                    </UnorderedList>


                </div></div></Layout>
    )
}

export default Projects