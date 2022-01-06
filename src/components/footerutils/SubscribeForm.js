import { Button, chakra, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from "react"
import { FooterHeading } from './FooterHeading'

export const SubscribeForm = (props) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Subscribe to NeoCapitalist</FooterHeading>
        <Text>Be the first to know when I post new content, and get <strong>free exclusive resources</strong>.</Text>
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
            required
            focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
            borderRadius="0"
            color={useColorModeValue('#000000','#ffffff')}
          />
          <Button
            type="submit"
            bg="#3f4076"
            flexShrink={0}
            width={{
              base: 'full',
              md: 'auto',
            }}
            borderRadius="0"
          >
            Subscribe
          </Button>
          <Input type="hidden" value="NeoCapitalist" name="tag"/>
        </Stack>
      </Stack>
    </chakra.form>
  )
}
