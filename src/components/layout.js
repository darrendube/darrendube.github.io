import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"

import Logo from "./logo"
import styled from "styled-components"

import SubscribeForm from "./subscribe-form"
import SubscribeFormFooter from "./subscribe-form-footer"
import FooterLogo from "./footer-logo"
import { FaInstagram , FaTwitter , FaYoutube , FaDev} from "react-icons/fa"
import ThemeChanger from "./themeChanger"

import {MDXProvider} from '@mdx-js/react'
import {WebsiteFooter} from './footer'



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
      </header>
      <div className="site-wrapper">
      
      {children}
      </div>
      <WebsiteFooter/>
      </div>
    
  )
}
