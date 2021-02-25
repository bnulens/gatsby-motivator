import React from "react"
import {
  StyledFooting,
  PhoneIcon,
  EmailIcon,
} from "../style/elements/styledFooter"

const Footer = () => {
  const thisYear = new Date().getFullYear()

  return (
    <StyledFooting>
      <div className="footer__inner-wrapper">
        <h3>Let's get in touch !</h3>
        <a href="tel:+32494749731" className="footer__contact-link">
          <PhoneIcon />
          <p>... by phone</p>
        </a>
        <a
          href="mailto:brechtnulens@gmail.com"
          className="footer__contact-link"
        >
          <EmailIcon />
          <p>... or by email</p>
        </a>
        <p>
          {`\uD83D\uDD25`}
          {thisYear}
        </p>
      </div>
    </StyledFooting>
  )
}

export default Footer
