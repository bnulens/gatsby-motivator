import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SideNote from "./content/SideNote"

import { StyledLetter, Wrapper } from "../style/elements/styledLetter"

const Letter = () => {
  return (
    <StyledLetter>
      <SideNote />
      <Wrapper>
        <Header />
        <section className="motivation__wrapper">
          <blockquote>Dag HR en de rest van het XYZ team</blockquote>
          <article className="motivation__about">
            <h2>Wie ben ik ?</h2>
            <h3>
              Ik ben Brecht Nulens, 25 jaar oud en een developer uit Hasselt
            </h3>
            <p>
              Mijn interesse voor development komt voort uit mijn opleiding
              Grafisch Ontwerp aan de PXL waar we met Dreamweaver en jQuery
              simpele layouts maakten voor denkbeeldige bedrijven. Zo raakte ik
              verkocht aan de wereld van webdesign en development en verliet ik
              vroegtijdig de schoolbank.
            </p>
            <p>
              Via een omweg als netwerkbeheerder ben ik terecht gekomen bij
              BeCode. Een initiatief waarbij ik enorm veel heb opgestoken en
              even geëngageerde studenten heb leren kennen.
            </p>
          </article>
        </section>
        <Footer />
      </Wrapper>
    </StyledLetter>
  )
}

export default Letter
