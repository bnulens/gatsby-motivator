import styled from "styled-components"

export const StyledLetter = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 12px 0px;
  background-color: var(--color-purple_prime);

  @media screen and (min-width: 768px) {
    height: 86vh;
    border-radius: 8px;
    z-index: 500;
  }
`

export const ArticleHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h2 {
    font-family: "Fraunces";
    font-size: 32px;
    font-weight: 300;
    text-align: justify;
  }

  h3 {
    font-size: 14px;
    font-weight: 100;
  }

  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 6px;

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
`

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
    padding: 12px;

    p {
      font-size: 14px;
    }
  }
`

export const MotivationArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 56px 0px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SiteLink = styled.a`
  display: block;
  width: 300px;
  padding: 12px 36px;
  margin: 42px auto 64px;
  color: var(--color-white);
  border-radius: 6px;
  background-color: var(--color-red_second);
  text-align: center;
  cursor: pointer;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 12px;

  .motivation__wrapper {
    max-width: 90%;
    margin: 0 auto;

    blockquote {
      display: block;
      margin-top: 24px;
      padding: 12px 16px;
      font-size: 16px;
      font-weight: 200;
      border-left: 3px solid var(--color-red_prime);
      background-color: var(--color-purple_second);
    }
    blockquote:nth-of-type(2) {
      font-size: 14px;
      background-color: var(--color-purple_prime);
      text-align: justify;
    }

    /* About article */
    /* Motivation article */

    /* Stack article */
    .motivation__stack-info {
      margin: 24px auto;

      .motivation__stack {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 25% 25%;
        grid-template-areas:
          ". . . "
          ". . . ";
        max-width: 90%;
        margin: 0 auto;

        li {
          position: relative;
          display: flex;
          justify-content: center;
          width: auto;

          span {
            position: absolute;
            top: 50%;
            left: 50%;
            bottom: -10%;
            padding: 6px 8px;
            font-size: 12px;
            background-color: var(--color-purple_second);
            transform: translate(-50%, -50%);
            transition: all ease 0.4s;
            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 75%,
              66% 76%,
              50% 100%,
              33% 75%,
              0% 75%
            );
            opacity: 0;
          }

          img {
            display: block;
            width: 12vw;
          }
        }

        @media screen and (min-width: 768px) {
          max-width: 90%;
          margin: 0 auto;

          li {
            img {
              width: 60px;
            }
            :hover {
              span {
                opacity: 1;
                transform: translate(-50%, -180%);
              }
            }
          }
        }
      }
    }
    /* Roadmap article */
    .motivation__roadmap {
      margin: 24px auto;
      .motivation__roadmap-inner-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        blockquote {
          font-size: 12px;
          font-weight: 100;
          text-align: justify;
          margin-bottom: 24px;
          background: none;

          a {
            color: var(--color-red_second);
          }
        }
        .roadmap-chart-link {
          border: 16px solid var(--color-purple_second);
          img {
            display: block;
            width: 100%;
          }
        }
        @media screen and (min-width: 768px) {
          flex-direction: row;

          blockquote {
            font-size: 14px;
            margin-right: 18px;
            margin-bottom: 0px;

            a {
              :hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    /* Company article */
  }
  @media screen and (min-width: 768px) {
    overflow: scroll;
  }
  @media screen and (min-width: 1080px) {
    max-width: 1080px;
  }
`
