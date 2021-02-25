import styled from "styled-components"
import IntIcon from "../../assets/icons/language.svg"

export const LanguagesIcon = styled(IntIcon)`
  display: block;
  width: 24px;
  path {
    fill: white;
  }
`

export const StyledSideNote = styled.aside`
  display: flex;
  justify-content: space-between;
  height: 100%;

  .side-note__side-scroll {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;

      .side-note__side-scroll-item {
        display: flex;
        align-items: center;
        margin: 12px auto;
        cursor: pointer;

        .item-bullet {
          display: block;
          width: 10px;
          height: 10px;
          margin-right: 10px;
          border: 1px solid var(--color-silver);
          border-radius: 50%;
        }

        h4 {
          font-family: "Fraunces";
          font-size: 24px;
          font-weight: 300;
          color: var(--color-silver);
        }
      }
    }
  }
  .side-note__languages {
    .side-note__languages-note {
      display: flex;

      ${LanguagesIcon} {
        top: 12px;
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
    flex-direction: column;
    width: 20%;
    padding: 12px 24px;
  }
`
