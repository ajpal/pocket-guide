import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const HowToGuide = () => (
  <Layout>
    <Header siteTitle={"How-To Guide"} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HowToGuide
