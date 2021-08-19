import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SubscribeForm from "./subscribe-form"
import { Heading, Text, useColorModeValue, Box } from "@chakra-ui/react"



const InTextSubscription = (props) => {
 
    return (<Box bg={useColorModeValue("#a6374e","#080808")} color="white" className="in-text-sub">
        <Heading mb="1rem" fontSize="xl">ENJOYING THE ARTICLE?</Heading>
        <Text mb="1rem"><b>Subscribe for free</b> for more content!</Text>
        <SubscribeForm />
    </Box>)
}

export default InTextSubscription