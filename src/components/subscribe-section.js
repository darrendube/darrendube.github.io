import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"
import SubscribeForm from "./subscribe-form"



const SubscribeSection = () => (
  <div className="subscribe-section">
  <div className="subscribe-section-wrapper">
  <div>
    <h2 className="subscribe-heading">Get the newsletter and get notified about new content</h2>
  </div>
  <div>
    <p className="subscribe-content"> Be the first to know when I post new content. 
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</p>
   </div>
   
   <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form subscribe-form"
>
        
	        <input type="email" className="text-box-sectionform" name="email" placeholder="Email" required></input>
	        <input type="hidden" value="1" name="embed"></input>
	        <input type="submit" className="hero-button" value=" SUBSCRIBE &rarr;"></input>
        
        </form>
        
     
  </div></div>
)

export default SubscribeSection