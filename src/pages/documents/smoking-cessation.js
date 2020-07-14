import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const SmokingCessation = () => (
  <Layout>
    <Header siteTitle={"Smoking Cessation"} />
    <iframe
      src="https://drive.google.com/file/d/1D-XMYs0wkznJtZBVJlIeY8XOIMjQ67ZC/preview"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SmokingCessation
