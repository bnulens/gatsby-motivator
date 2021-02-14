import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Flex from "../components/Flex"
import Header from "../components/header"
import Footer from "../components/footer"
import ToggleNightMode from "../components/ToggleNightMode"

const Container = styled(Flex)`
  height: 100%;
  align-items: stretch;
  justify-content: center;
  @media ${(props) => props.theme.mediaQueries.large} {
    align-items: center;
    height: 100vh;
    ::before {
      content: "";
      position: absolute;
      background: ${(props) => (props.darkMode ? "#555" : "grey")};
      width: 100%;
      height: 100%;
      z-index: -6;
    }
  }
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 900px;
  height: auto;
  padding: 0 16px;

  @media ${(props) => props.theme.mediaQueries.large} {
    position: relative;
    width: 868px;
    margin: -72px auto 0px;

    ::before {
      content: "";
      position: absolute;
      background: #41b883;
      width: 100%;
      height: 120%;
      top: -10px;
      left: 0;
      transform: rotate(3deg);
      -webkit-transform: rotate(3deg);
      -moz-transform: rotate(3deg);
      z-index: -4;
    }
  }
`

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Container>
      <StyledWrapper>
        <Header siteTitle={data.site.siteMetadata.title}>
          <ToggleNightMode value={darkMode} setDark={setDarkMode} />
        </Header>
        <main>{children}</main>
        <Footer />
      </StyledWrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
