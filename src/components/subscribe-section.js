import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"
import SubscribeForm from "./subscribe-form"



const SubscribeSection = () => (
  <div className="subscribe-section">
  <div className="items-wrapper">
  <div>
    <h2 className="subscribe-heading">Get the newsletter and get notified about new content</h2>
  </div>
  <div>
    <p className="subscribe-content"> Be the first to know when I post new content. 
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</p>
   </div>
   
   <SubscribeForm />
     
  </div></div>
)

export default SubscribeSection