import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const IpvTrafficking = () => (
  <Layout>
    <Header siteTitle={"IPV/Trafficking"} />
    <ol>
      <li>
        <a href="https://diiri.org/">Dorcas International Institute</a> -
        461-4940
      </li>
      <li>
        <a href="http://www.sojournerri.org/">Sojourner House</a> - 861-6191
      </li>
    </ol>
    <h1>Mandatory Reporting</h1>
    <ol>
      <li>
        <a href="http://www.dcyf.ri.gov/child-protective-services/">
          Child Abuse & Neglect, including DMST
        </a>{" "}
        (under 18; under 21 for those in DCYF Care): Call DCYF hotline -
        1-800-742-4453{" "}
      </li>
      <li>Elderly Abuse & Neglect (60 and older) - 462-0555</li>
    </ol>
    <h1>Legal Services</h1>
    <ol>
      <li>
        General IPV and Restraining Orders:{" "}
        <a href="https://www.helprilaw.org/">General RI Legal Services</a> -
        274-2652
      </li>
      <li>
        <a href="https://ribar.com/default.aspx">
          The Rhode Island Bar Association Volunteer Lawyer Program
        </a>{" "}
        - 421-7758
      </li>
      <li>
        <a href="https://www.courts.ri.gov/PublicResources/domesticviolenceunit/PDF/VictimInfoEnglish.pdf">
          Restraining order office
        </a>{" "}
        - 458-3372
      </li>
    </ol>
    <h1>Helplines</h1>
    <h2>Statewide</h2>
    <ol>
      <li>
        Domestic Violence General Line:{" "}
        <a href="http://www.ricadv.org/en/get-help">
          RI Coalition Against Domestic Violence
        </a>{" "}
        - 1-800-494-8100
      </li>
      <li>
        Domestic Violence:{" "}
        <a href="http://www.sojournerri.org/">Sojourner House Helpline</a> -
        765-3232
      </li>
      <li>
        Domestic Minor Sex Trafficking (DMST) -{" "}
        <a href="https://www.dayoneri.org/sites/default/files/site-content/CSEC%20protocol%20one%20page%20final.pdf">
          Follow RI Statewide Uniform Response Protocol
        </a>{" "}
      </li>
      <li>
        General Trafficking:{" "}
        <a href="https://www.dayoneri.org/node/13">
          Day One Resource Center Advocate
        </a>
        - 1-(800)-494-8100
      </li>
      <li>
        Sexual Assault and Trauma:{" "}
        <a href="https://www.dayoneri.org/node/13">
          Day One Resource Center Advocate
        </a>{" "}
        - 1-(800)-494-8100
      </li>
    </ol>
    <h2>National</h2>
    <ol>
      <li>Domestic Violence: 1-(800)-799-7233</li>
      <li>Human Trafficking: 1-(888)-373-7888</li>
      <li>Sexual Assault: 1-(800)-656-4673</li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IpvTrafficking
