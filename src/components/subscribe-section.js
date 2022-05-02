import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"
import SubscribeForm from "./subscribe-form"
import {
  
  Heading,
  Text,
  Box,
  useColorModeValue
} from "@chakra-ui/react"


const SubscribeSection = () => (
  <Box bg={useColorModeValue("#12358f","#080808")} mt="40px" color="white">
  <Box p="43px" m="0px auto" className="subscribe-section-wrapper">
  <div>
    <Heading fontSize="1.5em" fontWeight="800" mb="20px" className="subscribe-heading">Enjoyed the article? Get the newsletter and get notified about new content!</Heading>
  </div>
  <div>
    <Text className="subscribe-content" mb="16px"> Be the first to know when I post new content, and get <b>free exclusive resources. </b>
    I promise not to spam your inbox or share your email with any third parties. 
    You can opt-out at any time</Text>
   </div>
   
   <SubscribeForm />
        
     
  </Box></Box>
)

export default SubscribeSection