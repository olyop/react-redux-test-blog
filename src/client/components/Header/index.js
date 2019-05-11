import React from "react"

import { componentClassNames } from "../../helpers"

import "./index.scss"

const bem = componentClassNames("Header")

const Header = () => (
  <div className={bem("")}>
    <h1 className={bem("title")}>Blog Posts</h1>
  </div>
)

export default Header
