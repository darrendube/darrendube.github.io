import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"

const SubscribeSection = () => (
  <div className="subscribe-section">
    <h4 className="subscribe-heading">Get the newsletter and get notified about new content</h4>
    <p className="subscribe-content"> Be the first to know when I post new content. 
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</p>
  </div>
)

export default SubscribeSection