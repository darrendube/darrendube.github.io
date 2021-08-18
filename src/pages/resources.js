import React from "react";
import PropTypes from "prop-types";

import PostLink from "../components/post-link";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import ResourceCard from "../components/resource-card";
import { FaCalendar, FaClock } from "react-icons/fa";

// Components
import { Link, graphql } from "gatsby";

/*
const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />) */

const ResourcesPage = ({ pageContext, data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Resources - NeoCapitalist</title>
        <meta name="robots" content="noindex"/>

      </Helmet>
      <div className="category-header ">
        <div className="cat-header-wrapper items-wrapper">
          <h5 className="category-breadcrumb">BLOG / </h5>
          <h2 className="category-title">Resources</h2>
        </div>
      </div>
      <div className="posts-section">
        <div className="items-wrapper">
          <div className="grids">

            {/* List resources here*/}

            <ResourceCard
              link="https://github.com/darrendube/websiteresources/blob/main/ebooks/Introduction%20to%20Static%20Site%20Generators.pdf?raw=true"
              thumbnail="/downloadable-thumbnails/intro-to-ssgs-thumbnail.png"
              title="Introduction to Static Site Generators"
            />

            <ResourceCard
              link="https://github.com/darrendube/websiteresources/blob/main/ebooks/INFOGRAPHIC-The%20Jamstack%20in%20a%20nutshell.pdf?raw=true"
              thumbnail="/downloadable-thumbnails/jamstack-infographic.jpg"
              title="INFOGRAPHIC - The Jamstack, in a nutshell."
            />







          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ResourcesPage;
