import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SubscribeForm from "./subscribe-form"
import Img from "gatsby-image"


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
      <div className="hero-header">
        <div className="items-wrapper hero-grid">
        <div className="hero-text">
        <div className="headline">Making Your <br/>Coding Journey<br/><span className="easier">Easier</span><span className="blue-dot">.</span></div>
        <div 
          className="primary-content" >News, tutorials, videos.  </div><SubscribeForm /></div>
        <div className="hero-image">
       
          <img src="/assets/econ-image.png" className=""/>

          
        </div>

        
      </div>
      </div>
    )}
  />
)