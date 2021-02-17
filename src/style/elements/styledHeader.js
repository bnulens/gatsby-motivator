import styled from "styled-components"

export const StyledHeader = styled.header`
  display: sticky;
  top: 0;
  width: 100%;
  height: auto;

  .header__heading-wrapper {
    margin-bottom: 16px;
    line-height: 1.2;
    h1 {
      font-family: "Fraunces";
      font-size: 64px;
      font-weight: 300;
    }
    h2 {
      font-size: 32px;
      font-weight: 100;
    }
  }
`
