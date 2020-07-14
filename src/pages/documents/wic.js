import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const WIC = () => (
  <Layout>
    <Header siteTitle={"WIC Income Eligibility"} />
    <iframe
      src="https://drive.google.com/file/d/1_o-llnH04MYm2jieoEZ895PqTlzmkwMB/preview"
      title="WIC Federal Income Guidelines"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WIC
