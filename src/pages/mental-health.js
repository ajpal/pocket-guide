import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const MentalHealth = () => (
  <Layout>
    <Header siteTitle={"Mental Health"} />
    <h1>Uninsured</h1>
    <ol>
      <li>
        <a href="https://www.aplacetobehealthy.org/">Clinica Esperanza</a> -
        347-9093
      </li>
      <li>
        <a href="https://www.rifreeclinic.org/">RIFC</a> - 274-6347
      </li>
      <li>
        <a href="https://www.providencechc.org/">
          Providence Community Health Centers
        </a>{" "}
        - Multiple locations - Main number - 444-0400{" "}
      </li>
      <li>
        High Acuity:{" "}
        <a href="https://www.gatewayhealth.org/">Gateway Health Center</a>{" "}
        -729-8701
      </li>
    </ol>
    <h1>Therapy</h1>
    <ol>
      <li>
        Resident clinic: Butler Hospital or Resident{" "}
        <a href="http://www.butler.org/programs/outpatient/resident-continuity-clinic.cfm">
          Continuity Clinic
        </a>{" "}
        email or 455-6230
      </li>
      <li>
        If have Lifespan Free Care:{" "}
        <a href="https://www.lifespan.org/centers-services/outpatient-psychiatry">
          Lifespan Psychiatry
        </a>{" "}
        East Providence or East Greenwich 606-0606
      </li>
    </ol>
    <h1>Insured</h1>
    <ol>
      <li>
        Adult Outpatient:{" "}
        <a href="https://providencecenter.org/">Providence Center</a> - 276-4020
      </li>
      <li>
        High Acuity:{" "}
        <a href="https://www.gatewayhealth.org/">Gateway Health Center</a> -
        729-8701
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MentalHealth
