import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Healthcare = () => (
  <Layout>
    <Header siteTitle={"Healthcare"} />
    <h1> Insurance Navigation </h1>
    <ol>
      <li>
        <a href="https://healthsourceri.com/">HealthSource RI</a> Hotline -
        (855)-840-4774
      </li>
      <li>
        In person:{" "}
        <a href="https://healthsourceri.com/appointments/">
          Wampanoag Trail in East Providence
        </a>{" "}
        - (855-840-4774)
      </li>
      <li>
        In person: Navigator/insurance specialists at{" "}
        <a href="https://www.providencechc.org/">
          Providence Community Health Center
        </a>{" "}
        - 444-0400
      </li>
    </ol>
    <h1> Uninsured Primary Care </h1>
    <ol>
      <li>
        General:{" "}
        <a href="https://www.providencechc.org/">
          Providence Community Health Center
        </a>{" "}
        (Multiple Locations) - 521-2255
      </li>
      <li>
        Low Income Adults:{" "}
        <a href="https://www.rifreeclinic.org/">Rhode Island Free Clinic</a> -
        274-6347 ext: 1, 2, 0
      </li>
      <li>
        Spanish Speaking:{" "}
        <a href="https://www.aplacetobehealthy.org/">Clinica Esperanza</a>{" "}
        Appointments and walk ins on different days - 347-9093
      </li>
      <li>
        Trans Health, Housing-insecure individuals:{" "}
        <a href="https://www.thundermisthealth.org/">Thundermist</a> - 767-4100
        x4303
      </li>
      <li>
        Mental Health and Addiction:{" "}
        <a href="https://providencecenter.org/">The Providence Center</a> -
        861-2493X3822
      </li>
      <li>
        Dental Care -{" "}
        <a href="https://www.ridental.org/public/free-and-low-cost-dental-ri/good-shepherd-dental-care">
          Good Shepherd Dental Care
        </a>{" "}
        - 274-8861
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Healthcare
