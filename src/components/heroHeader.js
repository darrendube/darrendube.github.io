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
        <div className="headline">LEARN ECONOMICS WITH <span className="primary-gradient">EASE</span></div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        /><SubscribeForm /></div>
        <div className="hero-image">
          <img src="/assets/econ-image.png" className=""/>
        </div>

        
      </div>
      </div>
    )}
  />
)