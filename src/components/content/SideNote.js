import React from "react"

import LanguageSwitcher from "../LanguageSwitcher"
import { StyledSideNote } from "../../style/elements/styledSideNote"
const SideNote = () => {
  return (
    <StyledSideNote>
      <LanguageSwitcher />
      <ul className="side-note__side-scroll">
        <li className="side-note__side-scroll-item">A</li>
        <li className="side-note__side-scroll-item">B</li>
        <li className="side-note__side-scroll-item">C</li>
        <li className="side-note__side-scroll-item">D</li>
      </ul>
    </StyledSideNote>
  )
}

export default SideNote
