import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Immigration = () => (
  <Layout>
    <Header siteTitle={"Immigration"} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Immigration
