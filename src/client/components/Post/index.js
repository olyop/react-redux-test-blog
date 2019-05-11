import React from "react"

import UserHeader from "../UserHeader"

import { componentClassNames } from "../../helpers"
import { propTypes } from "./props"
import { capitalize } from "lodash"

import "./index.scss"

const bem = componentClassNames("Post")

const Post = ({ id, userId, title, body }) => (
  <button className={bem("")}>
    <h2 className={bem("title")}>{id}. {capitalize(title)}</h2>
    <UserHeader userId={userId} />
    <p className={bem("body")}>{capitalize(body)}</p>
  </button>
)

Post.propTypes = propTypes

export default Post
