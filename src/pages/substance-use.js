import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const SubstanceUse = () => (
  <Layout>
    <Header siteTitle={"Substance Use"} />
    <h1>Detoxification</h1>
    <ol>
      <li>
        <a href="https://www.phoenixhouse.org/">Phoenix House</a> - 294-2787
      </li>
      <li>
        <a href="https://adcare.com/locations/rhode-island/">AdCare</a> -
        294-0419
      </li>
      <li>
        <a href="https://www.communitycareri.org/default.aspx">
          Community Care Alliance
        </a>{" "}
        - 295-5979
      </li>
      <li>
        <a href="https://www.butler.org/">Butler Hospital</a> - 455-6200
      </li>
      <li>
        <a href="http://www.rwmc.org/services/alcohol-and-drug-detoxification-program">
          Roger Williams Hospital
        </a>{" "}
        - 456-2363
      </li>
      <li>Opioid use treatment: CODAC Behavioral Health - 808-6278</li>
    </ol>
    <h1>General</h1>
    <ol>
      <li>
        General:{" "}
        <a href="https://providencecenter.org/">The Providence Center</a>-
        276-4020
      </li>
      <li>
        Referrals to other organizations:{" "}
        <a href="https://health.ri.gov/find/services/detail.php?id=53">
          Recovery Support Hotline
        </a>
        - 942-7867{" "}
      </li>
      <li>
        Peer support:{" "}
        <a href="https://anchorrecovery.org/">Anchor Recovery Network</a>-
        721-5100
      </li>
      <li>
        Resource navigation: Visit any of{" "}
        <a href="https://pvdsafestations.com/">Providence's 12 fire stations</a>{" "}
        for immediate support
      </li>
    </ol>
    <h1>Uninsured</h1>
    <ol>
      <li>
        Worked-based program:{" "}
        <a href="https://ctri.salvationarmy.org/SNE/RILocations">
          Salvation Army Rehabilitation Center
        </a>{" "}
        - 421-5270
      </li>
      <li>
        General:{" "}
        <a href="https://www.aplacetobehealthy.org/">Clinica Esperanza</a> -
        347-9093
      </li>
      <li>
        Residential Program: <a href="https://www.amoshouse.com/">Amos House</a>{" "}
        - 272-0220
      </li>
    </ol>
    <h1>Tobacco</h1>
    <ol>
      <li>
        {" "}
        Ready to quit:
        <a href="https://health.ri.gov/find/services/detail.php?id=20">
          QuitWorks RI
        </a>{" "}
        - Fill out online patient referral form for free tobacco cessation tools{" "}
      </li>
      <li>
        Not ready to quit:{" "}
        <a href="https://health.ri.gov/healthrisks/tobacco/about/quitsmoking/">
          Rhode Island Smoker's Helpline
        </a>
        : (1-800)-QUIT-NOW
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SubstanceUse
