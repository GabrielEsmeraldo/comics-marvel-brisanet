import { Fragment, useState } from "react"
import { Home } from "./pages/Home"
import GlobalStyle from "./styles/globalStyle"

function App() {
  return (
    <Fragment>
      <Home />
      <GlobalStyle />
    </Fragment>
  )
}

export default App
