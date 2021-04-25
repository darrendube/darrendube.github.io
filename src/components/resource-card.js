import React from "react"
import { Link , navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaCalendar , FaClock} from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image";





const ResourceCard = ({ props, thumbnail, title, link }) => (
  <div className="card resource-card " onClick={() => navigate(link)}>
    <div className=""><Link to="/">
     
        <img
          src={thumbnail}
          className="card-image"
          
         
          /></Link>
      <h3>{title}</h3>
    </div>

    <input type="submit" className="hero-button" value=" DOWNLOAD &rarr;" ></input>
    
  </div>
)


export default ResourceCard

