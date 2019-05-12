import React from "react"

import { componentClassNames } from "../../helpers"

import "./index.scss"

const bem = componentClassNames("Header")

const Header = () => (
  <header className={bem("")}>
    <h1 className={bem("title")}>Blog Posts</h1>
  </header>
)

export default Header
