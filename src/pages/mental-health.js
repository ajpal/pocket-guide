import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const MentalHealth = () => (
  <Layout>
    <Header siteTitle={"Mental Health"} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MentalHealth
