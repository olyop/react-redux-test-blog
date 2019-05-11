import React, { Component } from "react"

import { componentClassNames } from "../../helpers"
import { fetchUser } from "../../actions"
import { connect } from "react-redux"

import "./index.scss"

const bem = componentClassNames("UserHeader")

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }
  render() {
    const { userId, user } = this.props
    return (
      <button className={bem("")}>
        {user === undefined ? "Loading..." : user.name}
      </button>
    )
  }
}

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find(({ id }) => id === userId)
})
const mapDispatchToProps = { fetchUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
