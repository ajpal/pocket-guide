import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>White Coat "Pocket" Guide</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
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
