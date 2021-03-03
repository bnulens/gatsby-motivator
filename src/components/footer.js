import React from "react"
import { useTranslation } from "react-i18next"

import { StyledFooting } from "../style/elements/styledFooter"

import Navbar from "../components/navbar/Navbar"

const Footer = () => {
  const thisYear = new Date().getFullYear()
  const flame = `\uD83D\uDD25`

  const { t } = useTranslation()
  return (
    <StyledFooting>
      <article className="footer__content">
        <div className="footer__heading-wrapper">
          <h2>{t("footer.title")}</h2>
        </div>
        <div className="footer__bottom-wrapper">
          <Navbar />
          <div className="footer__bottom-tag">
            <span>{flame}</span>
            <span>{thisYear}</span>
          </div>
        </div>
      </article>
    </StyledFooting>
  )
}

export default Footer
