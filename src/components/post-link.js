import React from "react";
import { Link, navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FaCalendar, FaClock } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { HStack, VStack, Text, Box } from "@chakra-ui/react";

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
      <Text as="strong" size="1.1rem" mb="0.3rem" className="post-title blue-grey-heading">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </Text>
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

        <Box><p>{post.excerpt}</p></Box>
      </div>
    </div>
  </div>
);

export default PostLink;
