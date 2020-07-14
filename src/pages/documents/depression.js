import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const Depression = () => (
  <Layout>
    <Header siteTitle={"Depression Resources"} />
    <iframe
      src="https://drive.google.com/file/d/1pbeqr-sHCrye2WeEIdaMprc-gSrQM1cD/preview"
      title="Doctoring III: Depression Resources for Providers"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Depression
