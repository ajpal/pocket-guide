import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const IpvResources = () => (
  <Layout>
    <Header siteTitle={"IPV Resources"} />
    <iframe
      src="https://drive.google.com/file/d/1feK-h-Ki9krTCNK9HTNjWcSrL6Y8m6sE/preview"
      title="IPV Safety Planning Questions"
      width="50%"
      height="480"
    ></iframe>
    <iframe
      src="https://drive.google.com/file/d/1KpsaN7jqSnz4oYt1tq2aRfKMo7phsTN8/preview"
      title="What To Do If You Have Been Abused"
      width="50%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IpvResources
