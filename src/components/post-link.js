import React from "react";
import {Link, navigate} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {chakra, Text, useColorModeValue,} from "@chakra-ui/react";

const PostLink = ({ post }) => (
  <>
    <chakra.div
      background={useColorModeValue("#ffffff00", "#11111100")}
      className="card "
      onClick={() => navigate(post.frontmatter.path)}

      display="grid"
      
      transition="all 0.5s"
      
    >
      <GatsbyImage
        image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
        alt={"testimage"}
        style={{
borderRadius:"15px"
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        
        // You can optionally force an aspect ratio for the generated image
        
      />  

      <div class="filldetails" style={{

          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          paddingTop: "13px"


        }}>

      <chakra.div
        background={useColorModeValue("#ffffff", "#000000")}


        display="inline-block"
        height="fit-content"
        opacity="100%"
        width="calc(100% - 14px)"
        className="bdfilter"

        verticalAlign="bottom"
      >
        <div className="post-details" >
          <div className="type-category">
            <chakra.div
              color={useColorModeValue("#ffffff", "#000000")}
              className="category"
              mr="5px"
              backgroundColor={useColorModeValue("#000000", "#ffffff")}
                borderRadius="7px"

            >
              {" "}
              {post.frontmatter.category}{" "}
            </chakra.div>
            <Text as="p" ms="0px !important">
              {post.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;
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
              fontFamily="Open Sans"            >
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
