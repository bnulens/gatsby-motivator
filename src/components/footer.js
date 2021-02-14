import React from "react"
import styled from "styled-components"

import Flex from "./Flex"

const StyledFooter = styled.footer`
  position: relative;
`
const FooterWrapper = styled(Flex)`
  position: absolute;
  background: #adffce;
  height: 50px;
  width: 100%;
  margin-left: -16px;
  span {
    margin: 0 auto;
    color: grey;
  }
`

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <StyledFooter>
      <FooterWrapper alignItems="center">
        <span>&copy; {thisYear}</span>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
