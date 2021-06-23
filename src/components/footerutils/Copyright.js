import { Text } from '@chakra-ui/layout'
import React from "react"

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    Copyright &copy; {new Date().getFullYear()} NeoCapitalist. All rights reserved.
  </Text>
)
