import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const HowToGuide = () => (
  <Layout>
    <Header siteTitle={"How-To Guide"} />
    <iframe
      src="https://drive.google.com/file/d/1Yopo-us9fFC53sVHUpr5XFicV91TDNZYbdyLDNLBbsE/preview"
      title="The White Coat Pocket Guide"
      width="100%"
      height="480"
    ></iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HowToGuide
