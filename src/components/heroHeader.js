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
      <Box bg={useColorModeValue("#ffffff", "#000000")} className="hero-header">
        <div className="items-wrapper hero-grid">
        <div className="hero-text">
        <Text className="headline" fontWeight="800">Making Your <br/>Economics Journey<br/><chakra.span color={useColorModeValue("#a6374e","#a0aec0")}>Easier</chakra.span>.</Text>
        <div 
          className="primary-content" >Subscribe to NeoCapitalist for engaging, in-depth, and trustworthy economic articles.  </div><SubscribeForm /></div>
        <div className="hero-image">
       
          <StaticImage 
            src="../images/econ-image.png" 
            alt="econ-image"
          
            />
     

          
        </div>

        
      </div>
      </Box>
    )}
  />
)