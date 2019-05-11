import { jsonPlaceholder } from "../globals"

export const fetchPosts = () => {
  const promise = jsonPlaceholder.get("/posts")
  return {
    type: "FETCH_POSTS",
    payload: promise
  }
}