import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const Snap2019 = () => (
  <Layout>
    <Header siteTitle={"SNAP 2019 Eligibility"} />
    <iframe
      src="https://drive.google.com/file/d/1bbFry-0sW6DCQF8DzTHGz69VeaNGpo0P/preview"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Snap2019
