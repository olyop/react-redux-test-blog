import { pipe, postsUserIds } from "../helpers"
import { jsonPlaceholder } from "../globals"
import { forEach, noop } from "lodash"

export const fetchPosts = (callback = noop) => dispatch => {
  jsonPlaceholder.get("/posts")
    .then(res => {
      const posts = res.data
      dispatch({
        type: "FETCH_POSTS",
        payload: posts
      })
      callback(posts)
    })
}

export const fetchUser = userId => dispatch => {
  jsonPlaceholder.get(`/users/${userId}`)
    .then(res => {
      dispatch({
        type: "FETCH_USER",
        payload: res.data
      })
    })
}

export const fetchPostsAndUsers = () => dispatch => {
  dispatch(
    fetchPosts(
      posts => {
        forEach(
          postsUserIds(posts),
          userId => dispatch(fetchUser(userId))
        )
      }
    )
  )
}
