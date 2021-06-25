import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Button, chakra, Input, Stack, Text, useColorModeValue, Heading } from '@chakra-ui/react'



const SubscribeForm = (props) => {
  return (

    <chakra.form action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
    method="post"
    target="popupwindow"
    onSubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
    class="embeddable-buttondown-form subscribe-form">
        <Stack spacing="4">
        
          <Stack
            spacing="4"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Input
              bg={useColorModeValue('white', 'inherit')}
              placeholder="Enter your email"
              type="email"
              name="email"
              required
              focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
              _placeholder={{
                opacity: 1,
                color: useColorModeValue('gray.500', 'whiteAlpha.700'),
              }}
            />
            <Input type="hidden" value="1" name="embed"/>
            <Button
              type="submit"
              colorScheme="blue"
              flexShrink={0}
              width={{
                base: 'full',
                md: 'auto',
              }}
              value={props.downloadable ? "DOWNLOAD" : "SUBSCRIBE >"}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </chakra.form>
     
    
  )
}



export default SubscribeForm

