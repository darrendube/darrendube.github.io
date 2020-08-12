import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"

const SectionHeader = styled.div`
	margin: 20px 30px 0 30px;
	text-align: center;
`

const SectionContent = styled.div`
	margin: 20px 30px 0 30px;
	text-align: center;
`

const SectionSubmit = styled.div`
	margin: 20px 29px 0 20px;
`

const SubscribeSection = () => (
  <div className="subscribe-section">
  <SectionHeader>
    <h2 className="subscribe-heading">Get the newsletter and get notified about new content</h2>
  </SectionHeader>
  <SectionContent>
    <p className="subscribe-content"> Be the first to know when I post new content. 
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</p>
   </SectionContent>
   <SectionSubmit>
   <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form"
>
        <div className="button-wrapper">
        <input type="text" className="text-box" placeholder="Email"></input>
        <input type="submit" className="hero-button -primary" value=" Subscribe &rarr;"></input>
        </div>
        </form>
     </SectionSubmit>
  </div>
)

export default SubscribeSection