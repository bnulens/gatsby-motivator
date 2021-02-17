import styled from "styled-components"

export const StyledLetter = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 86vh;
  padding: 24px 12px;
  border-radius: 8px;
  background-color: var(--color-purple_prime);
  z-index: 500;
`

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 12px 24px;
  overflow: scroll;

  .motivation__wrapper {
    blockquote {
      display: block;
      margin-top: 24px;
      padding: 12px 16px;
      font-size: 24px;
      font-weight: 200;
      border-left: 3px solid var(--color-red_prime);
      background-color: var(--color-purple_second);
    }
    blockquote:nth-of-type(2) {
      background-color: var(--color-purple_prime);
    }
    .motivation__about {
      display: flex;
      margin: 50px 0px;

      .motivation__about-heading {
        display: flex;
        flex-direction: column;
        width: 35%;
        h2 {
          font-family: "Fraunces";
          font-size: 42px;
          font-weight: 300;
          text-align: justify;
        }
        h3 {
          font-size: 14px;
          font-weight: 100;
        }
      }
      .motivation__about-content {
        display: flex;
        flex-direction: column;
        width: 65%;
        p {
          text-align: justify;
          padding: 12px;
          font-weight: 300;
          margin-bottom: 12px;
        }
      }
      @media ${(props) => props.theme.mediaQueries.large} {
      }
    }
    .motivation__motivate {
      display: flex;
      .motivation__motivate-heading {
        display: flex;
        flex-direction: column;
        width: 35%;
        padding: 12px;
        h2 {
          font-family: "Fraunces";
          font-size: 42px;
          font-weight: 300;
          text-align: justify;
        }
      }
      .motivation__motivate-content {
        display: flex;
        flex-direction: column;
        width: 65%;
        padding: 12px;
        text-align: justify;
        p {
          text-align: justify;
          font-weight: 300;
          margin-bottom: 12px;
        }
      }
    }
  }
`
