import { Heading, useColorModeValue } from '@chakra-ui/react'
import React from "react"

export const FooterHeading = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.400', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)
