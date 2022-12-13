import {
    Box,
    Button,
    ButtonGroup,
    chakra,
    Heading,
    IconButton,
    Input,
    SimpleGrid,
    Stack,
    StackDivider,
    useColorModeValue
} from '@chakra-ui/react'
import React from "react"
import {FaInstagram, FaRss, FaTwitter} from 'react-icons/fa'


import {Link} from "gatsby";
import logoimgplain from "../images/logo-plain.png";
import styled from "styled-components";
import {Text} from "@chakra-ui/layout";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width = 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const FooterHeading = (props) => (
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


            <LogoWrap className="logo-link" as={Link} to="/">
            <img src={useColorModeValue(logoimgplain, logoimgplain)} className="logoimg" />
        {/*<p className="logo-text"> DARREN&nbsp;<span className="dube">DUBE</span></p>*/}
            </LogoWrap>

       
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
            <SimpleGrid columns={2} spacing={{
                base: '10',
                md: '20',
                lg: '28',
            }}
                        flex="1">
                <Box minW="130px">
                    <FooterHeading mb="4">Categories</FooterHeading>
                    <Stack>

                        <Link to="/blog/data-science">Data Science</Link>
                        <Link to="/blog/economics">Economics</Link>

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

            <chakra.form width={{
                base: 'full',
                md: 'sm',
            }} onSubmit={(e) => e.preventDefault()}>
                <Stack spacing="4">
                    <FooterHeading>Subscribe</FooterHeading>
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
                        <Input type="hidden" value="Darren Dube" name="tag"/>
                    </Stack>
                </Stack>
            </chakra.form>

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
          <Text fontSize="sm">
              Copyright &copy; {new Date().getFullYear()} <Link href="https://darrendube.com">Darren Dube</Link>. All rights reserved.
          </Text>
          <ButtonGroup variant="ghost" color="gray.600">
              <IconButton as="a" href="https://darrendube.com/rss.xml" aria-label="RSS" icon={<FaRss fontSize="20px" />} target="_blank"/>
              <IconButton as="a" href="https://twitter.com/darrendube" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} target="_blank"/>
              <IconButton as="a" href="https://instagram.com/darrendube" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} target="_blank"/>

          </ButtonGroup>
      </Stack>
    </Stack>
  </Box></Box>
)
