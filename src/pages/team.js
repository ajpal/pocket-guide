import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Team = () => (
  <Layout>
    <Header siteTitle={"Team"} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Team
