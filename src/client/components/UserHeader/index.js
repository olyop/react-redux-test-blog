import React from "react"

import { componentClassNames } from "../../helpers"
import { connect } from "react-redux"
import { isUndefined } from "lodash"
import { propTypes } from "./props"

import "./index.scss"

const bem = componentClassNames("UserHeader")

const UserHeader = ({ user }) => (
  <button className={bem("")}>
    {user.name === undefined ? "Loading..." : user.name}
  </button>
)

const mapStateToProps = ({ users }, { userId }) => {
  const user = users.find(({ id }) => id === userId)
  return ({
    user: isUndefined(user) ? {} : user
  })
}

export default connect(mapStateToProps)(UserHeader)
