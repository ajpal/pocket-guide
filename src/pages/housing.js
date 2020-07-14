import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Housing = () => (
  <Layout>
    <Header siteTitle={"Housing"} />
    <h1>Case Management</h1>
    <ol>
      <li>
        <a href="https://thehouseofhopecdc.org/">House of Hope Intake</a> -
        340-3050
      </li>
      <li>
        <a href="https://ripica.org/">PICA</a> - 454-7422
      </li>
      <li>
        <a href="https://www.crossroadsri.org/">Crossroads</a> - 521-2255
      </li>
    </ol>
    <h1>Legal</h1>
    <ol>
      <li>
        Housing Denial: Text or call Megan Smith to connect with a student
        clinic (c) - (513) 407-0857
      </li>
      <li>
        Housing Eviction:{" "}
        <a href="https://rils.org/contact.cfm">RI Legal Services</a> - 274-2652
      </li>
      <li>
        Housing Discrimination:{" "}
        <a href="http://southcoastfairhousing.org/contact/">
          SouthCoast Fair Housing
        </a>
        - 285-2550
      </li>
    </ol>
    <h1>General</h1>
    <ol>
      <li>
        On-Call Support Related to Homelessness: Megan Smith (c) - (513)
        407-0857
      </li>
      <li>
        Bridge Psychiatric and Primary Care: Craig Kaufman at ACCESS-RI (c)-
        477-0914{" "}
      </li>
      <li>
        <a href="https://thehouseofhopecdc.org/shower-to-empower/">
          Mobile Unit
        </a>{" "}
        (Showers, haircut, information): Call Sara M (c) for hours - 533-4477
      </li>
      <li>
        <a href="https://www.rihomeless.org/coordinated-entry">
          Statewide Coordinated Entry
        </a>{" "}
        - 277-4316
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Housing
