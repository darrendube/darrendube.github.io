import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SubscribeForm from "./subscribe-form"
import { GatsbyImage , StaticImage} from "gatsby-plugin-image";
import "../images/econ-image.png";
import { useColorModeValue, Box } from "@chakra-ui/react";



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
      <Box bg={useColorModeValue("#ffffff", "#0e182a")} className="hero-header">
        <div className="items-wrapper hero-grid">
        <div className="hero-text">
        <div className="headline">Making Your <br/>Economics Journey<br/><span className="easier">Easier</span><span className="blue-dot">.</span></div>
        <div 
          className="primary-content" >News, tutorials, videos.  </div><SubscribeForm /></div>
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