import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const ChildAbuse = () => (
  <Layout>
    <Header siteTitle={"Reporting Child Abuse"} />
    <iframe
      src="https://drive.google.com/file/d/1nvcMeqLXwitg1LJtb6TOwSLEx9ba4Y0F/preview"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ChildAbuse
