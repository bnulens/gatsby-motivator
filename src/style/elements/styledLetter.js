import styled from "styled-components"

export const StyledLetter = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 12px;
  background-color: var(--color-purple_prime);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 86vh;
    border-radius: 8px;
    z-index: 500;
  }
`

export const Wrapper = styled.div`
  width: 100%;
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
      text-align: justify;
    }

    /* About article */
    .motivation__about {
      display: flex;
      flex-direction: column;
      margin: 50px 0px;

      .motivation__about-heading {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

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

        p {
          text-align: justify;
          font-weight: 300;
          margin-bottom: 12px;
        }
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;

        .motivation__about-heading {
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
          width: 65%;
          p {
            text-align: justify;
            padding: 12px;
            font-weight: 300;
            margin-bottom: 12px;
          }
        }
      }
    }
    /* Motivation article */
    .motivation__motivate {
      display: flex;
      flex-direction: column;

      .motivation__motivate-heading {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

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
        text-align: justify;

        p {
          text-align: justify;
          font-weight: 300;
          margin-bottom: 12px;
        }
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;

        .motivation__motivate-heading {
          width: 35%;
          padding: 12px;
        }
        .motivation__motivate-content {
          width: 65%;
          padding: 12px;
        }
      }
    }
    /* Stack article */
    .motivation__stack-info {
      margin: 24px auto;

      .motivation__stack {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 24px 6px;
        grid-template-areas:
          ". . . ."
          ". . . ."
          ". . . .";

        li {
          display: flex;
          flex-direction: row;
          width: auto;
        }

        span {
          margin-right: 6px;
        }

        @media screen and (min-width: 768px) {
          display: flex;
          justify-content: space-between;
          width: 90%;
          margin: 0 auto;

          li {
            display: flex;
            align-items: center;

            span {
              margin-right: 10px;
            }
            p {
              font-size: 14px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1080px) {
    max-width: 1080px;
  }
`
