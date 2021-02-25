import styled from "styled-components"

import Phone from "../../assets/icons/phone.svg"
import Email from "../../assets/icons/email.svg"

export const PhoneIcon = styled(Phone)``
export const EmailIcon = styled(Email)``

export const StyledFooting = styled.footer`
  height: 240px;
  width: 100%;
  margin-top: 48px;

  .footer__inner-wrapper {
    height: 100%;
    width: 100%;
    padding: 6px 12px;
    /* background-color: var(--color-coal); */
    margin: 0 auto;

    h3 {
      font-family: "Fraunces";
      font-size: 42px;
      font-weight: 300;
    }
    .footer__contact-link {
      display: flex;
      align-items: center;
      margin: 20px auto;
      color: var(--color-lightgrey);

      p {
        margin-left: 8px;
        font-weight: 100;
      }

      svg {
        display: block;
        width: 30px;
        height: auto;
        transition: all ease 0.2s;

        path {
          fill: var(--color-silver);
        }
      }

      :hover {
        p {
          color: var(--color-safe);
        }
        svg {
          path {
            fill: var(--color-safe);
          }
        }
      }
    }
  }
`
