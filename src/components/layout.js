import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div><div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      </div>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} <a href="https://darrendube.com">Darren Dube </a>&bull; Made with <span role="img" aria-label="love">❤️</span> from Zimbabwe</p>
<p> Theme by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
