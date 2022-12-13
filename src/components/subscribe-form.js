import React from "react"
import {Button, chakra, Input, Stack, useColorModeValue, useToast} from '@chakra-ui/react'


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
              bg={useColorModeValue('inherit', 'inherit')}
              placeholder="Enter your email"
              type="email"
              name="email"
              borderRadius="0px"
              required
              focusBorderColor={useColorModeValue('blue.300', 'blue.300')}
              borderColor={useColorModeValue('blue.400', 'inherit')}
              _placeholder={{
                opacity: 1,
                color: useColorModeValue('whiteAlpha.700', 'whiteAlpha.700'),
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
              bg={useColorModeValue('blue.600','#1f1f2e')}
              borderRadius="0px"
              _hover={{background:"black"}}
              color="white"
            >
              Subscribe
            </Button>
            <Input type="hidden" value="Darren Dube" name="tag"/>
          </Stack>
        </Stack>
      </chakra.form>
     
    
  )
}



export default SubscribeForm

