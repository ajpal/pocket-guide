import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const Medication = () => (
  <Layout>
    <Header siteTitle={"Prescription Medications"} />
    <iframe
      src="https://drive.google.com/file/d/1Bu0_GA4to26UwQFNOMCqY1N99NmSpBxB/preview"
      title="Retail Prescription Program Drug List"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Medication
