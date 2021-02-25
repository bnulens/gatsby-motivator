import React from "react"
import styled from "styled-components"
import Flex from "../../style/Flex"

import Globe from "../../assets/icons/globe.svg"
import GitHub from "../../assets/icons/github.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"

const SocialContainer = styled(Flex)`
  span {
    color: var(--color-silver);
    z-index: 2;
  }
`
const SocialLink = styled.a`
  margin-right: 6px;
  margin-left: 6px;
  transition: all ease 0.4s;
  z-index: 2;
  :first-child {
    margin-left: 0;
  }
  :focus {
    outline: none;
  }
`
const SocialLinkWrapper = styled(Flex)`
  color: var(--color-white);
  transition: all ease 0.1s;

  .social-link-icon {
    display: block;
    width: 16px;
    height: 16px;
    filter: invert(1);
  }
  p {
    display: block;
    margin-left: 6px;
    font-size: 12px;
  }
  :hover {
    color: var(--color-safe);
    .social-link-icon {
      path {
        fill: #b33b47;
      }
    }
  }
`
const NavbarLinks = () => {
  return (
    <SocialContainer alignItems="center">
      <SocialLink
        className="social-link"
        href="https://brechtnulens.be/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <SocialLinkWrapper justifyContent="flex-start" alignItems="center">
          <Globe className="social-link-icon" />
          <p>Website</p>
        </SocialLinkWrapper>
      </SocialLink>
      <span>|</span>
      <SocialLink
        className="social-link"
        href="https://github.com/bnulens"
        target="__blank"
        rel="noopener noreferrer"
      >
        <SocialLinkWrapper justifyContent="flex-start" alignItems="center">
          <GitHub className="social-link-icon" />
          <p>GitHub</p>
        </SocialLinkWrapper>
      </SocialLink>
      <span>|</span>
      <SocialLink
        className="social-link"
        href="https://linkedin.com/in/brecht-nulens/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <SocialLinkWrapper justifyContent="space-between" alignItems="center">
          <LinkedIn className="social-link-icon" />
          <p>LinkedIn</p>
        </SocialLinkWrapper>
      </SocialLink>
    </SocialContainer>
  )
}
export default NavbarLinks
