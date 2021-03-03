import React, { useState, useEffect } from "react"
import styled from "styled-components"
import i18next from "i18next"
import i18n from "../i18n"

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 12px;
  z-index: 100;
`

const LanguageBlock = styled.button`
  margin-right: 6px;
  padding: 8px;
  text-align: center;
  border-radius: 50%;
  background: transparent;
  color: var(--color-white);
  transition: all ease 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--color-coal);
  }

  &.active {
    border: 1px solid var(--color-white);
  }
  &.inactive {
    color: var(--color-silver);
    border: 1px solid var(--color-silver);
    filter: grayscale(0.5);
  }
`

const LanguageSwitcher = () => {
  const [key, setKey] = useState(i18n.language)
  const [active, setActive] = useState(key)

  useEffect(() => {
    setKey(localStorage.getItem("i18nextLng"))
  }, [])

  const handleLanguageSwitch = (language) => {
    i18next.changeLanguage(language, (err, t) => {
      if (err) return console.log("something went wrong loading", err)
    })
  }

  const toggleLanguage = (e) => {
    e.preventDefault()
    setActive(e.target.value)
    handleLanguageSwitch(e.target.value)
  }

  return (
    <Wrapper>
      <LanguageBlock
        className={`language-button-active ${
          active === "nl" ? "active" : "inactive"
        }`}
        onClick={(e) => toggleLanguage(e)}
        value="nl"
      >
        NL
      </LanguageBlock>
      <LanguageBlock
        className={`language-button-active ${
          active === "en" ? "active" : "inactive"
        }`}
        onClick={(e) => toggleLanguage(e)}
        value="en"
      >
        EN
      </LanguageBlock>
    </Wrapper>
  )
}

export default LanguageSwitcher
