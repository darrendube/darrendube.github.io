import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Button, chakra, Input, Stack, Text, useColorModeValue, Heading, useToast } from '@chakra-ui/react'






const SubscribeForm = (props) => {
  const toast = useToast()
  return (

    <chakra.form action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
    method="post"
    target="popupwindow"
    onSubmit= {() =>
      toast({
        title: "Subscription successful",
        description: "You've successfully subscribed. ",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }
    class="embeddable-buttondown-form subscribe-form">
        <Stack spacing="4">
        
          <Stack
            spacing="4"
            direction={{
              base: 'column',
              md: 'row',
            }}
            maxWidth="600px"
          >
            <Input
              bg={useColorModeValue('gray.100', 'inherit')}
              placeholder="Enter your email"
              type="email"
              name="email"
              borderRadius="10px"
              required
              focusBorderColor={useColorModeValue('#282828', 'blue.300')}
              _placeholder={{
                opacity: 1,
                color: useColorModeValue('gray.500', 'whiteAlpha.700'),
              }}
              color={useColorModeValue('#000000','#ffffff')}
            />
            <Input type="hidden" value="1" name="embed"/>
            
            <Button
              type="submit"
              
              flexShrink={0}
              width={{
                base: 'full',
                md: 'auto',
              }}
              value={props.downloadable ? "DOWNLOAD" : "SUBSCRIBE >"}
              bg="#1f1f2e"
              borderRadius="10px"
              _hover={{background:"black"}}
              color="white"
            >
              Subscribe
            </Button>
            <Input type="hidden" value="NeoCapitalist" name="tag"/>
          </Stack>
        </Stack>
      </chakra.form>
     
    
  )
}



export default SubscribeForm

