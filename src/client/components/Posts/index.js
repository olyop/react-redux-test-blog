import React, { Component, Fragment } from "react"

import Post from "../Post"

import { componentClassNames } from "../../helpers"
import { fetchPostsAndUsers } from "../../actions"
import { connect } from "react-redux"
import { sortBy } from "lodash"

import "./index.scss"

const bem = componentClassNames("Posts")

class Posts extends Component {
  componentDidMount() {
    const { fetchPostsAndUsers } = this.props
    fetchPostsAndUsers()
  }
  render() {
    const { posts } = this.props
    const sortedPosts = sortBy(posts, "title")
    return (
      <section className={bem("")}>
        {posts.length === 0 ? <Fragment>
          <h2>Loading...</h2>
        </Fragment> : <Fragment>
          {sortedPosts.map(post => (
            <Post
              {...post}
              key={post.id}
            />
          ))}
        </Fragment>}
      </section>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = { fetchPostsAndUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
