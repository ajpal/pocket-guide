import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const Homelessness = () => (
  <Layout>
    <Header siteTitle={"Street Sheets Providence"} />
    <iframe
      src="https://drive.google.com/file/d/116GAPzVEYR8r5oWgUSlwm71j57-rtMGf/preview"
      title="Street Sheet Providence Area"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Homelessness
