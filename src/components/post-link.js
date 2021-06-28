import React from "react";
import { Link, navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FaCalendar, FaClock } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { HStack, VStack, Text, Box, useColorModeValue } from "@chakra-ui/react";

const PostLink = ({ post }) => (

  <div className="card " onClick={() => navigate(post.frontmatter.path)}>
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
    <div className="post-details">
      <div className="type-category">
        <div className="post-type"> {post.frontmatter.type} </div>

        {!!post.frontmatter.category && (
          <div className="category"> {post.frontmatter.category} </div>
        )}
      </div>
       <Link to={post.frontmatter.path}  className="post-link">
      <Text mb="0.3rem" fontWeight="bold" size="1.1rem"  fontSize="1.1rem" color={useColorModeValue("#2e3748", "#ffffff")}>
       
          {post.frontmatter.title}
        
      </Text></Link>
      <div className="post-meta">
        <p className="blue-grey-text bold">
          <Box mb="12px">
          <HStack>
          <HStack>
          <FaCalendar />
          <Text as="p" ms="0px !important">&nbsp;&nbsp;{post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</Text></HStack>
          <HStack>
          <FaClock />
          <Text ms="0px !important">&nbsp;&nbsp;{Math.round(post.fields.readingTime.minutes)} minute read</Text></HStack></HStack></Box>
        </p>

        <Box><Text color={useColorModeValue("#33475b","#718097")}>{post.excerpt}</Text></Box>
      </div>
    </div>
  </div>
);

export default PostLink;
