import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import logoimg from "../../images/logo.png";
import logoimgplain from "../../images/logo-plain.png";
import { useColorModeValue } from "@chakra-ui/react";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

export const Logo = () => {
  return (
    <LogoWrap className="logo-link" as={Link} to="/">
      <img src={useColorModeValue(logoimg, logoimgplain)} className="logoimg" />
      {/*<p className="logo-text"> DARREN&nbsp;<span className="dube">DUBE</span></p>*/}
    </LogoWrap>
  );
};



