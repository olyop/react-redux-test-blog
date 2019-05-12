import { jsonPlaceholder } from "../globals"
import { uniq, map, forEach } from "lodash"
import { pipe } from "../helpers"

export const fetchPosts = callback => dispatch => {
  jsonPlaceholder.get("/posts")
    .then(res => {
      dispatch({
        type: "FETCH_POSTS",
        payload: res.data
      })
      callback(res.data)
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
  dispatch(fetchPosts(posts => {
    forEach(uniq(map(posts, ({ userId }) => userId)), userId => dispatch(fetchUser(userId)))
  }))
}
