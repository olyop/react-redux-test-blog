import React, { Component, Fragment } from "react"

import Post from "../Post"

import { componentClassNames } from "../../helpers"
import { fetchPosts } from "../../actions"
import { connect } from "react-redux"

import "./index.scss"

const bem = componentClassNames("Posts")

class Posts extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }
  render() {
    const { posts } = this.props
    return (
      <div className={bem("")}>
        {posts.length === 0 ? null : <Fragment>
          {posts.map(post => (
            <Post {...post} key={post.id} />
          ))}
        </Fragment>}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = { fetchPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
