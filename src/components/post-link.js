import React from "react";
import { Link, navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FaCalendar, FaClock } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { HStack, VStack, Text, Box, useColorModeValue, Heading,chakra } from "@chakra-ui/react";

const PostLink = ({ post }) => (

  <chakra.div background={useColorModeValue("#ffffff", "#111111")} className="card " onClick={() => navigate(post.frontmatter.path)}>
    
    <div className="post-details">
      <div className="type-category">
        

        
          <chakra.div color={useColorModeValue("#276152","#50b197")} className="category"> {post.frontmatter.category} </chakra.div>
          <Text as="p" ms="0px !important">&nbsp;&nbsp;{post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      </div>
       <Link to={post.frontmatter.path}  className="post-link">
      <Text mb="0.8rem" mt="0.4rem" fontWeight="800" size="2rem"  fontSize="1.4rem" color={useColorModeValue("#000000", "#ffffff")} lineHeight="1.2">
       
          {post.frontmatter.title}
        
      </Text></Link>
      <div >
        

        <Box><Text color={useColorModeValue("#303030","#718097")} fontSize="0.9rem">{post.excerpt}</Text></Box>
      </div>
    </div>
    <div className="fill">
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <GatsbyImage
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            className="card-image"
            alt={post.frontmatter.title + "- Featured Shot"}
            placeholder="dominantColor"
          />
        )}
      </Link>
    </div>
  </chakra.div>
);

export default PostLink;
