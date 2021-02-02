import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SubscribeForm from "./subscribe-form"


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
        <div className="headline">LEARN CODING WITH <span className="primary-gradient">EASE</span></div>
        <div 
          className="primary-content" >Welcome to my blog, where I post about coding, tech, and science.  Subscribe below to get the newsletter :)</div><SubscribeForm /></div>
        <div className="hero-image">
          <img src="/assets/econ-image.png" className=""/>
        </div>

        
      </div>
      </div>
    )}
  />
)