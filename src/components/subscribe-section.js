import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"
import SubscribeForm from "./subscribe-form"
import {
  
  Heading,
  Text,
} from "@chakra-ui/react"


const SubscribeSection = () => (
  <div className="subscribe-section">
  <div className="subscribe-section-wrapper">
  <div>
    <Heading className="subscribe-heading">Get the newsletter and get notified about new content!</Heading>
  </div>
  <div>
    <Text className="subscribe-content"> Be the first to know when I post new content, and get <b>free exclusive resources.</b> 
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</Text>
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