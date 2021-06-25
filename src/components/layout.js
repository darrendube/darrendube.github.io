import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navigation";

import { WebsiteFooter } from "./footer";

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
  );
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <div className="site-wrapper">{children}</div>
      <WebsiteFooter />
    </div>
  );
};
