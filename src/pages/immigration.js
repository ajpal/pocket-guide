import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Immigration = () => (
  <Layout>
    <Header siteTitle={"Immigration"} />
    <ol>
      <li>
        <a href="https://diiri.org/">Dorcas International Institute</a> -
        461-4940
      </li>
      <li>
        <a href="http://www.sojournerri.org/">Sojourner House</a> - 861-6191
      </li>
    </ol>
    <h1>General/Legal</h1>
    <ol>
      <li>
        <a href="https://progresolatino.org/">General: Progreso Latino</a> -
        728-5920{" "}
      </li>
      <li>
        <a href="https://amorri.org/">General: Amor Network</a> - 675-1414
      </li>
      <li>
        <a href="http://www.sojournerri.org/">General: Sojourner House</a> -
        861-6191
      </li>
      <li>
        <a href="https://dioceseofprovidence.org/immigration-refugee-services">
          Family Immigration: Dioceses of Providence
        </a>{" "}
        - 421-7833 ext.229
      </li>
      <li>
        <a href="https://www.aplacetobehealthy.org/patients">
          Healthcare: Clinica Esperanza
        </a>{" "}
        - 347-9093
      </li>
    </ol>
    <h1>Refugees/Resettlement</h1>
    <ol>
      <li>
        {" "}
        <a href="https://diiri.org/">Dorcas International Institute</a> -
        784-8600
      </li>
      <li>
        <a href="http://www.refugeedreamcenter.org/">Refugee Dream Center</a>{" "}
        -300-0444
      </li>
      <li>
        <a href="https://dioceseofprovidence.org/immigration-refugee-services">
          Diocese of Providence
        </a>{" "}
        - 421-7833 ext. 229{" "}
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Immigration
