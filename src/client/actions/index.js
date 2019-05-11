import { jsonPlaceholder } from "../globals"

export const fetchPosts = () => dispatch => {
  jsonPlaceholder.get("/posts")
    .then(res => {
      dispatch({
        type: "FETCH_POSTS",
        payload: res.data
      })
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
