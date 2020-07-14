import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const Miscellaneous = () => (
  <Layout>
    <Header siteTitle={"Uncategorized"} />

    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Miscellaneous
