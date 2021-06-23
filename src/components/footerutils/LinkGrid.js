import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import React from "react"
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>Microeconomics</Link>
        <Link>International Trade</Link>
        <Link>Cryptocurrency</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Other</FooterHeading>
      <Stack>
        <Link>Privacy Policy</Link>
        <Link>Contact</Link>
        <Link>Podcast</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
