import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

import logoimgplain from "../images/logo-plain.png";
import {useColorModeValue} from "@chakra-ui/react";
import logoimg from "../images/logo.png"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Logo = () => {
  return (
    <LogoWrap className="logo-link" as={Link} to="/">
      <img src={useColorModeValue(logoimg, logoimgplain)} className="logoimg" />
      {/*<p className="logo-text"> DARREN&nbsp;<span className="dube">DUBE</span></p>*/}
    </LogoWrap>
  );
};

export default Logo;
