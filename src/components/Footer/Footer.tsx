import React from "react";

import {
  FooterContainer,
  FooterList,
  FooterItem,
  FooterLogo,
  FooterDescription,
  FooterLink,
} from "./Footer.styles";

const Footer: React.SFC = () => {
  return (
    <FooterContainer>
      <FooterLogo>JS.hub</FooterLogo>
      <FooterDescription>Discover top JavaScript tooling</FooterDescription>
      <FooterList>
        <FooterItem>
          <FooterLink
            className="underline-link"
            href="https://github.com/matheuseabra/js-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink
            className="underline-link"
            href="https://twitter.com/matseabra "
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </FooterLink>
        </FooterItem>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
