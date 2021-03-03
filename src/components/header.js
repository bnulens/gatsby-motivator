import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import LanguageSwitcher from "../components/LanguageSwitcher"

import { StyledHeader, LanguagesIcon } from "../style/elements/styledHeader"

const Header = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader siteTitle={data.site.siteMetadata.title}>
      <div className="header__heading-wrapper">
        <div className="header__title-wrapper">
          <h1>{t("header.title")}</h1>
          <h2>{t("header.subTitle")}</h2>
        </div>
      </div>
      <div className="header__languages">
        <div className="header__languages-note">
          <p>{t("body.sideNote")}</p>
          <LanguagesIcon />
        </div>
        <LanguageSwitcher />
      </div>
    </StyledHeader>
  )
}

export default Header
