import React from "react"
import { useTranslation } from "react-i18next"

import Header from "../components/header"
import Footer from "../components/footer"
import SideNote from "./content/SideNote"

import { StyledLetter, Wrapper } from "../style/elements/styledLetter"

const Letter = () => {
  const { t } = useTranslation()
  return (
    <StyledLetter>
      <SideNote />
      <Wrapper>
        <Header />
        <section className="motivation__wrapper">
          <blockquote>{t("body.intro")}</blockquote>
          <article className="motivation__about">
            <div className="motivation__about-heading">
              <h2>{t("body.about.title")}</h2>
              <h3>{t("body.about.subTitle")}</h3>
            </div>
            <div className="motivation__about-content">
              <p>{t("body.about.p1")}</p>
              <p>{t("body.about.p2")}</p>
            </div>
          </article>
          <article className="motivation__motivate">
            <div className="motivation__motivate-heading">
              <h2>{t("body.motivate.title")}</h2>
            </div>
            <div className="motivation__motivate-content">
              <p>{t("body.motivate.p1")}</p>
              <p>{t("body.motivate.p2")}</p>
              <p>{t("body.motivate.p3")}</p>
              <p>{t("body.motivate.p4")}</p>
            </div>
          </article>
          <blockquote>{t("body.motivate.outro")}</blockquote>
        </section>
        <Footer />
      </Wrapper>
    </StyledLetter>
  )
}

export default Letter
