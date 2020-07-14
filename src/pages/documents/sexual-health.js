import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const SexualHealth = () => (
  <Layout>
    <Header siteTitle={"Sexual Health Resources"} />
    <iframe
      src="https://drive.google.com/file/d/14OlJ885-49P4cN4HoqGVbh0BmYedGRkk/preview"
      title="Doctoring Year 1: Sexual Health Resources for Patients and Providers"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SexualHealth
