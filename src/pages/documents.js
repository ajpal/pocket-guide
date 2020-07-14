import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Documents = () => {
  const docCategories = {
    "food-pantries": "Food Pantries",
    "smoking-cessation": "Smoking Cessation",
    depression: "Depression",
    "ipv-resources": "IPV Resources",
    "child-abuse": "Child Abuse",
    "sexual-health": "Sexual Health",
    trafficking: "Trafficking",
    medication: "Medication",
    "snap-2019": "SNAP 2019",
    wic: "WIC",
    homelessness: "Homelessness",
    miscellaneous: "Miscellaneous",
  }
  return (
    <Layout>
      <Header siteTitle={"Documents"} />
      <ul style={{ "list-style": "none" }}>
        {Object.keys(docCategories).map(category => (
          <li>
            <Link to={`/documents/${category}`}>{docCategories[category]}</Link>
          </li>
        ))}
        <li>
          <Link to="/">Go back to the homepage</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Documents
