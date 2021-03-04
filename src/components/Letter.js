import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import Header from "../components/header"
import Footer from "../components/footer"

import RoadMap from "../assets/images/roadmap.png"

import {
  StyledLetter,
  Wrapper,
  MotivationArticle,
  ArticleHeading,
  ArticleContent,
  SiteLink,
} from "../style/elements/styledLetter"

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
          <MotivationArticle>
            <ArticleHeading>
              <h2>{t("body.about.title")}</h2>
              <h3>{t("body.about.subTitle")}</h3>
            </ArticleHeading>
            <ArticleContent>
              <p>{t("body.about.p1")}</p>
              <p>{t("body.about.p2")}</p>
            </ArticleContent>
          </MotivationArticle>
          {/* Motivation article */}
          <MotivationArticle>
            <ArticleHeading>
              <h2>{t("body.motivate.title")}</h2>
            </ArticleHeading>
            <ArticleContent>
              <p>
                {t("body.motivate.p1")}{" "}
                <a
                  href="https://epic-galileo-8a7f26.netlify.app/"
                  target="_blank"
                  rel="noopener
                  noreferrer"
                >
                  {t("body.motivate.example")}
                </a>
              </p>
              <p>{t("body.motivate.p2")}</p>
              <p>{t("body.motivate.p3")}</p>
              <p>{t("body.motivate.p4")}</p>
            </ArticleContent>
          </MotivationArticle>
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
          {/* Roadmap article */}
          <article className="motivation__roadmap">
            <div className="motivation__roadmap-inner-wrapper">
              <blockquote>
                {t("body.roadmap.quote")}
                <a
                  href="https://roadmap.sh"
                  target="_blank"
                  rel="noopener
                  noreferrer"
                >
                  roadmap.sh
                </a>
              </blockquote>
              <a
                className="roadmap-chart-link"
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener
                noreferrer"
              >
                <img src={RoadMap} alt="front-end-roadmap" />
              </a>
            </div>
          </article>
          {/* Company article */}
          <MotivationArticle>
            <ArticleHeading>
              <h2>{t("body.company.title")}</h2>
              <h3>{t("body.company.subTitle")}</h3>
            </ArticleHeading>
            <ArticleContent>
              <p>{t("body.company.p1")}</p>
            </ArticleContent>
          </MotivationArticle>
          <blockquote>{t("body.motivate.outro")}</blockquote>
          <SiteLink
            href="https://brechtnulens.be"
            rel="noopener
            noreferrer"
            target="_blank"
          >
            {t("body.siteLink")}
          </SiteLink>
        </section>
        <Footer />
      </Wrapper>
    </StyledLetter>
  )
}

export default Letter
