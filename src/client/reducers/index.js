import { combineReducers } from "redux"

const posts = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      return payload
    default:
      return state
  }
}

const users = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return [ ...state, payload ]
    default:
      return state
  }
}

export default combineReducers({ posts, users })
