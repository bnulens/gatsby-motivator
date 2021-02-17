import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BackDrop = styled.div`
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    160deg,
    var(--color-purple_prime),
    var(--color-red_prime)
  );
  overflow: hidden;
`

const Container = styled.div`
  margin: 7vh auto;
  max-width: 90%;
  color: var(--color-white);

  ::before {
    content: "";
    position: absolute;
    top: 7vh;
    left: -12, 5%;
    height: 86vh;
    width: 100%;
    max-width: 90%;
    background-image: linear-gradient(
      270deg,
      var(--color-red_second),
      var(--color-red_prime)
    );
    transform: rotate(2deg);
  }
`

export default function Layout({ children }) {
  return (
    <BackDrop>
      <Container>
        <main>{children}</main>
      </Container>
    </BackDrop>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
