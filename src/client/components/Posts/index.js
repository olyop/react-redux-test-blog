import React, { Component } from "react"

import { componentClassNames } from "../../../helpers"
import { connect } from "react-redux"
import { fetchPosts } from "../../actions"

import "./index.scss"

const bem = componentClassNames("Posts")

class Posts extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }
  render() {
    return (
      <div className={bem("")}>
        Posts
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(Posts)
