import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"
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
    <div><header className="">
        <Navbar />
      </header><div className="site-wrapper">
      
      {children}
      </div>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} <a href="https://darrendube.com">Darren Dube </a>&bull; Made in Zimbabwe</p>

      </footer>
    </div>
  )
}
