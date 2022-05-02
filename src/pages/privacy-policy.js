import React from "react"
import PropTypes from "prop-types"

import PostLink from "../components/post-link"
import Helmet from 'react-helmet';

import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar, FaClock } from "react-icons/fa"
import { Link } from "gatsby"
import { Heading, Text, chakra, Box, useColorModeValue } from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy - Darren Dube</title>
                <meta name="description" content="On my website, accessible from darrendube.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information collected and recorded by this website and how we use it." />
                
        <meta property="og:title" content="Privacy Policy - Darren Dube"/>
        <meta property="og:description" content="On our website, accessible from darrendube.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information collected and recorded by this website and how we use it."/>
        <meta property="og:url" content="https://darrendube.com/privacy-policy"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://darrendube.com/icon.png"}/>


            </Helmet>
            <Box  maxWidth="100%" paddingTop="100px" bg={useColorModeValue("#0033a0","#091224")}><div className="cat-header-wrapper items-wrapper"><Text fontWeight="bold" color="white" className="category-title">Privacy Policy</Text></div></Box>
            <div className="posts-section">

                <div className="items-wrapper blog-post-content">

                    <Heading mb="1rem">Introduction</Heading>

                    <Text mb="1.5rem">On our website, accessible from <Link className="normal" href="https://darrendube.com">darrendube.com</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by this website and how we use it.</Text>

                    <Text mb="1.5rem">If you have additional questions or require more information about this Privacy Policy, do not hesitate to <Link className="normal" to="/contact">contact us</Link>.</Text>

                    <Text mb="1.5rem">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in this website. This policy is not applicable to any information collected offline or via channels other than this website.</Text>

                    <Heading mb="1rem">Consent</Heading>

                    <Text mb="1.5rem">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Text>

                    <Heading mb="1rem">Information we collect</Heading>

                    <Text mb="1.5rem">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Text>
                    <Text mb="1.5rem">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Text>
                    <Text mb="1.5rem">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Text>

                    <Heading mb="1rem">How we use your information</Heading>

                    <Text mb="1.5rem">We use the information we collect in various ways, including to:</Text>

                    <chakra.ul mb="1.5rem">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </chakra.ul>

                    <Heading mb="1rem">Log Files</Heading>

                    <Text mb="1.5rem">This website follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&#39; movement on the website, and gathering demographic information.</Text>

                    <Heading mb="1rem">Cookies and Web Beacons</Heading>

                    <Text mb="1.5rem">Like any other website, this website uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&#39; experience by customizing web page content based on visitors' browser type and/or other information.</Text>

                    <Text mb="1.5rem">For more general information on cookies, please read <Link className="normal" href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies" from Cookie Consent</Link>.</Text>



                    <Heading mb="1rem">Advertising Partners Privacy Policies</Heading>

                    <Text mb="1.5rem">You may consult this list to find the Privacy Policy for each of the advertising partners of this website.</Text>

                    <Text mb="1.5rem">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on this website, which are sent directly to the users&#39; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Text>

                    <Text mb="1.5rem">Note that this website has no access to or control over these cookies that are used by third-party advertisers.</Text>

                    <Heading mb="1rem">Third Party Privacy Policies</Heading>

                    <Text mb="1.5rem">This website's Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Text>

                    <Text mb="1.5rem">You can choose to disable cookies through your individual browser options. More detailed information about cookie management with specific web browsers may be found on the browsers' respective websites.</Text>

                    <Heading mb="1rem">CCPA Privacy Rights (Do Not Sell our Personal Information)</Heading>

                    <Text mb="1.5rem">Under the CCPA, among other rights, California consumers have the right to:</Text>
                    <Text mb="1.5rem">Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Text>
                    <Text mb="1.5rem">Request that a business delete any personal data about the consumer that a business has collected.</Text>
                    <Text mb="1.5rem">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</Text>
                    <Text mb="1.5rem">If you make a request, you should receive a response within one month. If you would like to exercise any of these rights, please <Link to="/contact">contact me</Link>.</Text>

                    <Heading mb="1rem">GDPR Data Protection Rights</Heading>

                    <Text mb="1.5rem">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Text>
                    <Text mb="1.5rem">The right to access – You have the right to request copies of your personal data. we may charge you a small fee for this service.</Text>
                    <Text mb="1.5rem">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Text>
                    <Text mb="1.5rem">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Text>
                    <Text mb="1.5rem">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Text>
                    <Text mb="1.5rem">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Text>
                    <Text mb="1.5rem">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Text>
                    <Text mb="1.5rem">If you make a request, you should receive a response within one month. If you would like to exercise any of these rights, please <Link to="/contact">contact me</Link>.</Text>

                    <Heading mb="1rem">Children's Information</Heading>

                    <Text mb="1.5rem">Another part of our priority is adding protections for children while using the internet. we encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Text>

                    <Text mb="1.5rem">This website does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on this website, we strongly encourage you to <Link className="normal" to="/contact">contact me</Link> immediately and we will do our best efforts to promptly remove such information from our records.</Text>

                </div></div></Layout>
    )
}

export default PrivacyPolicyPage