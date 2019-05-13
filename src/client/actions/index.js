import { postsUserIds } from "../helpers"
import { jsonPlaceholder } from "../globals"
import { forEach } from "lodash"

export const fetchPosts = callback => dispatch => {
  jsonPlaceholder.get("/posts")
    .then(res => {
      dispatch({
        type: "FETCH_POSTS",
        payload: res.data
      })
      callback()
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

export const fetchPostsAndUsers = () => (dispatch, getState) => {
  dispatch(
    fetchPosts(
      () => forEach(
        postsUserIds(getState().posts),
        userId => dispatch(fetchUser(userId))
      )
    )
  )
}
