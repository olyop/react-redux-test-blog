import React from "react"

import { componentClassNames } from "../../helpers"
import { connect } from "react-redux"
import { propTypes } from "./props"

import "./index.scss"

const bem = componentClassNames("UserHeader")

const UserHeader = ({ user }) => (
  <button className={bem("")}>
    {user === undefined ? "Loading..." : user.name}
  </button>
)

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.length === 0 ? {} : users.find(({ id }) => id === userId)
})

export default connect(mapStateToProps)(UserHeader)
