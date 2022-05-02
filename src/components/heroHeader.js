import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SubscribeForm from "./subscribe-form"
import { GatsbyImage , StaticImage} from "gatsby-plugin-image";
import "../images/econ-image.png";
import { useColorModeValue, Box, chakra, Text } from "@chakra-ui/react";



export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <Box bg={useColorModeValue("#12358f", "#000000")} className="hero-header" paddingTop="100px">
        <div className="items-wrapper hero-grid">
        <div className="hero-text">
        <Text className="headline" fontFamily="Open Sans" fontWeight="800" color={useColorModeValue("#ffffff","#ffffff")}><chakra.span color={useColorModeValue("#68D391","#a0aec0")}>Data Science,</chakra.span> <br/>Math, and<br/>Economics.</Text>
        <chakra.div color={useColorModeValue("#ffffff","#ffffff")}
          className="primary-content" >All in one place. Subscribe Now: </chakra.div><SubscribeForm /></div>
        <div className="hero-image">
       
          <StaticImage 
            src="../images/data-image.png"
            alt="data-image"
          
            />
     

          
        </div>

        
      </div>
      </Box>
    )}
  />
)