import { Text } from '@chakra-ui/layout'
import React from "react"
import { Link } from '@chakra-ui/react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    Copyright &copy; {new Date().getFullYear()} <Link href="https://neocapitalist.darrendube.com">NeoCapitalist</Link>. All rights reserved.
  </Text>
)
