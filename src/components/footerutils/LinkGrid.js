import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import React from "react"
import { FooterHeading } from './FooterHeading'
import { Link } from 'gatsby'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Categories</FooterHeading>
      <Stack>
        
        <Link to="/data-science">Data Science</Link>
        <Link to="/economics">Economics</Link>

      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Other</FooterHeading>
      <Stack>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/">Podcast</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
