import React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./src/style/global"
import Layout from "./src/style/layout"
import theme from "./src/style/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout children={element} />
    </ThemeProvider>
  )
}
