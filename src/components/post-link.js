import React from "react";
import { Link, navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FaCalendar, FaClock } from "react-icons/fa";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  HStack,
  VStack,
  Text,
  Box,
  useColorModeValue,
  Heading,
  chakra,
} from "@chakra-ui/react";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const PostLink = ({ post }) => (
  <>
    <chakra.div
      background={useColorModeValue("#ffffff00", "#11111100")}
      className="card "
      onClick={() => navigate(post.frontmatter.path)}
      borderRadius="20px"
      display="grid"
      
      transition="all 0.5s"
      
    >
      <GatsbyImage
        image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
        alt={"testimage"}
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        
        // You can optionally force an aspect ratio for the generated image
        
      />  

      <div class="filldetails" style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          height: "100% !important",
          background: "radial-gradient( #ffffff11,#00000022)"

        }}>
          <div className="fill"/>
      <chakra.div
        background={useColorModeValue("#ffffff", "#111111")}
        margin="7px"
        padding="20px"
        borderRadius="16px"
        display="inline-block"
        height="fit-content"
        opacity="100%"
        width="calc(100% - 14px)"
        className="bdfilter"
        backdropFilter=" blur(20px) saturate(125%) !important"
        verticalAlign="bottom"
      >
        <div className="post-details" >
          <div className="type-category">
            <chakra.div
              color={useColorModeValue("#276152", "#50b197")}
              className="category"
              
            >
              {" "}
              {post.frontmatter.category}{" "}
            </chakra.div>
            <Text as="p" ms="0px !important">
              &nbsp;&nbsp;{post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
          </div>

          <Link to={post.frontmatter.path} className="post-link">
            <Text
              mb="0.8rem"
              mt="0.4rem"
              fontWeight="800"
              size="2rem"
              fontSize="1.4rem"
              color={useColorModeValue("#000000", "#ffffff")}
              lineHeight="1.2"
            >
              {post.frontmatter.title}
            </Text>
          </Link>
          <div>
            
          </div>
        </div>
        
      </chakra.div>
      </div>
    </chakra.div>
  </>
);

export default PostLink;
