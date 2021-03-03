import styled from "styled-components"

import IntIcon from "../../assets/icons/language.svg"

export const LanguagesIcon = styled(IntIcon)`
  display: block;
  width: 24px;
  path {
    fill: white;
  }
`

export const StyledHeader = styled.header`
  max-width: 90%;
  margin: 0 auto;
  background-color: var(--color-purple_prime);

  .header__heading-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.2;

    .header__title-wrapper {
      margin-bottom: 24px;

      h1 {
        font-family: "Fraunces";
        font-size: 40px;
        font-weight: 300;
      }
      h2 {
        font-size: 16px;
        font-weight: 100;
      }
    }
  }
  .header__languages {
    .header__languages-note {
      display: none;

      ${LanguagesIcon} {
        margin-left: 12px;
      }

      p {
        font-family: "Fraunces";
        font-size: 12px;
        font-weight: 300;
      }
    }
  }

  @media screen and (min-width: 768px) {
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    height: 200px;
    z-index: 50;

    .header__heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;

      .header__title-wrapper {
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
    }
    .header__languages {
      .header__languages-note {
        display: flex;

        ${LanguagesIcon} {
          margin-left: 12px;
        }

        p {
          font-family: "Fraunces";
          font-size: 12px;
          font-weight: 300;
        }
      }
    }
  }
`
