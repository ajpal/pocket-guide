import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Header siteTitle={'White Coat "Pocket" Guide'} />
    <Link to="/healthcare/">Healthcare</Link> <br />
    <Link to="/mental-health/">Mental Health</Link> <br />
    <Link to="/substance-use/">Substance Use</Link> <br />
    <Link to="/ipv-trafficking/">IPV/Trafficking</Link> <br />
    <Link to="/immigration/">Immigration</Link> <br />
    <Link to="/housing/">Housing</Link> <br />
    <Link to="/nutrition/">Nutrition</Link> <br />
    <Link to="/documents/">Documents</Link> <br />
    <Link to="/how-to-guide/">How-To Guide</Link> <br />
    <Link to="/team/">Team</Link> <br />
  </Layout>
)

export default IndexPage
