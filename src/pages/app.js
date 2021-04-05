import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import { Link } from "gatsby"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/profile" component={Profile} />
      <Link path="/blog">Blog</Link>        
      <Login path="/login" />
    </Router>
    <p>App index</p>
  </Layout>
)

export default App