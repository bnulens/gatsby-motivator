import styled from "styled-components"

export const StyledLetter = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 86vh;
  border-radius: 8px;
  background-color: var(--color-purple_prime);
  overflow: scroll;
  z-index: 500;
`

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 12px 24px;

  .motivation__wrapper {
    blockquote {
      display: block;
      padding: 12px 16px;
      font-size: 18px;
      font-weight: 200;
      border-left: 3px solid var(--color-red_prime);
      background-color: var(--color-purple_second);
    }
  }
`
