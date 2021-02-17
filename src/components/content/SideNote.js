import React from "react"
import { useTranslation } from "react-i18next"

import LanguageSwitcher from "../LanguageSwitcher"
import { StyledSideNote } from "../../style/elements/styledSideNote"

const SideNote = () => {
  const { t } = useTranslation()
  return (
    <StyledSideNote>
      <span></span>
      <ul className="side-note__side-scroll">
        <li className="side-note__side-scroll-item">
          <span className="item-bullet"></span>
          <h4>{t("body.about.title")}</h4>
        </li>
        <li className="side-note__side-scroll-item">
          <span className="item-bullet"></span>
          <h4>{t("body.motivate.title")}</h4>
        </li>
      </ul>
      <div className="side-note__languages">
        <p>{t("body.sideNote")}</p>
        <LanguageSwitcher />
      </div>
    </StyledSideNote>
  )
}

export default SideNote
