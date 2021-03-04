import styled from "styled-components"

import Phone from "../../assets/icons/phone.svg"
import Email from "../../assets/icons/email.svg"

export const PhoneIcon = styled(Phone)``
export const EmailIcon = styled(Email)``

export const StyledFooting = styled.footer`
  width: 100%;
  margin: 32px auto;

  .footer__content {
    height: 100%;
    width: 100%;
    margin: 0 auto;

    .footer__heading-wrapper {
      h2 {
        font-family: "Fraunces";
        font-size: 6vw;
        font-weight: 300;
      }
    }

    .footer__bottom-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      .footer__bottom-tag {
        margin-top: 18px;

        span:nth-child(2) {
          margin-left: 6px;
        }
      }
    }
    @media screen and (min-width: 768px) {
      max-width: 90%;

      .footer__heading-wrapper {
        h2 {
          font-size: 32px;
        }
      }
      .footer__bottom-wrapper {
        flex-direction: row;
        justify-content: space-between;

        .footer__bottom-tag {
          margin-top: 0;
        }
      }
    }
  }
`
