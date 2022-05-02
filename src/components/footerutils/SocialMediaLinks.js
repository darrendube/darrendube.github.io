import { ButtonGroup, IconButton } from '@chakra-ui/react'
import React from "react"
import { FaTwitter, FaInstagram, FaRss } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://darrendube.com/rss.xml" aria-label="RSS" icon={<FaRss fontSize="20px" />} target="_blank"/>
    <IconButton as="a" href="https://twitter.com/darrendube" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} target="_blank"/>
    <IconButton as="a" href="https://instagram.com/darrendube" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} target="_blank"/>
 
  </ButtonGroup>
)
