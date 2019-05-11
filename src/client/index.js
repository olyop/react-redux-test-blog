import React from "react"
import ReactDOM from "react-dom"

import Posts from "./components/Posts"
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"

import "./index.scss"

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Posts />
    </Router>
  </Provider>,
  document.getElementById("root")
)
