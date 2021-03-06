import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Posts from "./components/Posts"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

import "./index.scss"

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Posts />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("App")
)
