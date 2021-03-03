import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import Header from "../components/header"
import Footer from "../components/footer"

import { StyledLetter, Wrapper } from "../style/elements/styledLetter"

const Letter = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query iconQuery {
      allFile(filter: { relativeDirectory: { eq: "dev-icons" } }) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  if (!data) {
    return <span>No icons found</span>
  }

  const icons = [...data.allFile.edges]
  const techArr = []

  icons.forEach((icn) => {
    techArr.push(icn.node)
  })

  return (
    <StyledLetter>
      <Wrapper>
        <Header />
        <section className="motivation__wrapper">
          <blockquote>{t("body.intro")}</blockquote>
          {/* About article */}
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
          {/* Motivation article */}
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
          {/* Stack article */}
          <article className="motivation__stack-info">
            <ul className="motivation__stack">
              {techArr.map((icon, i) => {
                let x = icon.base[0].toUpperCase() + icon.base.substring(1)
                return (
                  <li className="motivation__stack-item" key={i + 5}>
                    <span aria-label="tag" role="img">
                      {x.replace(".svg", "")}
                    </span>
                    <img src={icon.publicURL} alt={`skill-icon${i}`} key={i} />
                  </li>
                )
              })}
            </ul>
          </article>
          {/* Company article */}
          <article className="motivation__company">
            <div className="motivation__company-heading">
              <h2>X</h2>
              <h3>Y</h3>
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
