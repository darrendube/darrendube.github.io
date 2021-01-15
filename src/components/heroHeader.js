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
        <div className="items-wrapper">
        <div className="headline">LEARN ECONOMICS WITH <span className="teal">EASE</span></div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />

        <SubscribeForm />
      </div>
      </div>
    )}
  />
)