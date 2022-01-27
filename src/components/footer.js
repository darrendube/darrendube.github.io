import { Box, Stack, StackDivider, useColorModeValue, VStack } from '@chakra-ui/react'
import React from "react"
import { Copyright } from './footerutils/Copyright'
import { LinkGrid } from './footerutils/LinkGrid'
import { Logo } from './footerutils/Logo'
import { SocialMediaLinks } from './footerutils/SocialMediaLinks'
import { SubscribeForm } from './footerutils/SubscribeForm'


export const WebsiteFooter = () => (
  <Box bg={useColorModeValue("#1f1f2e","#121212")} color="#ffffff">
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
    
   
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '10',
          lg: '28',
        }}
      >
        <Box flex="1">
      
          <Logo />
       
        </Box>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '10',
            md: '20',
          }}
        >
          <LinkGrid
            spacing={{
              base: '10',
              md: '20',
              lg: '28',
            }}
            flex="1"
          />
          <SubscribeForm
            width={{
              base: 'full',
              md: 'sm',
            }}
          />
        </Stack>
      </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box></Box>
)
