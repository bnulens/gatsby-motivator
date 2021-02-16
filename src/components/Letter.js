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
            <h2>{t("body.about.title")}</h2>
            <h3>{t("body.about.subTitle")}</h3>
            <p>{t("body.about.p1")}</p>
            <p>{t("body.about.p2")}</p>
          </article>
          <article className="motivation__motivate">
            <h2>{t("body.motivate.title")}</h2>
            <p>{t("body.motivate.p1")}</p>
            <p>{t("body.motivate.p2")}</p>
            <p>{t("body.motivate.p3")}</p>
            <p>{t("body.motivate.p4")}</p>
          </article>
          <blockquote>{t("body.motivate.outro")}</blockquote>
        </section>
        <Footer />
      </Wrapper>
    </StyledLetter>
  )
}

export default Letter
