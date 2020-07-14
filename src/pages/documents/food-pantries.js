import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Layout from "../../components/layout"

const FoodPantries = () => (
  <Layout>
    <Header siteTitle={"RI Food Pantries"} />
    <iframe
      src="https://drive.google.com/file/d/1yTgd4lpjqDgjB9ymZ0tY4TgPY9uoPN6F/preview"
      width="100%"
      height="480"
    ></iframe>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FoodPantries
