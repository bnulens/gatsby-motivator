import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import Navbar from "../components/navbar/Navbar"

import { StyledHeader } from "../style/elements/styledHeader"

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
        <h2>{t("header.title")}</h2>
      </div>
      <Navbar />
    </StyledHeader>
  )
}

export default Header
