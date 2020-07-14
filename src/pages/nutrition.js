import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const Nutrition = () => (
  <Layout>
    <Header siteTitle={"Nutrition"} />
    <h1>Food Pantry</h1>
    <ol>
      <li>
        <a href="https://www.cappri.org/programs/food-pantry">
          Providence: Community Action Partnership Providence (CAPP) Food Pantry
        </a>{" "}
        - 654-4970
      </li>
      <li>
        Central Falls & Pawtucket:{" "}
        <a href="https://progresolatino.org/">Progreso Latino</a> - 728-5920
      </li>
      <li>
        East Bay:{" "}
        <a href="https://eastbayfoodpantry.org/">East Bay Food Pantry</a> -
        396-9490
      </li>
      <li>
        North RI:{" "}
        <a href="http://nrifoodpantry.org/">
          Northern Rhode Island Food Pantry
        </a>{" "}
        - 347-5714
      </li>
    </ol>
    <h1>Counseling/Resources</h1>
    <ol>
      <li>
        Referrals to other Organizations:{" "}
        <a href="https://rifoodbank.org/about-us/">RI Community Food Bank</a> -
        942-6325
      </li>
      <li>
        Education: SNAP or WIC users:{" "}
        <a href="https://www.farmfreshri.org/">Farm Fresh RI</a> - 312-4250
      </li>
      <li>
        Individuals:{" "}
        <a href="https://www.lifespan.org/centers-services/nutrition-services">
          Lifespan Nutrition Counseling
        </a>
      </li>
      <li>
        Low-income patients financial help with food:{" "}
        <a href="http://www.dhs.ri.gov/DHSOffices/index.php">SNAP Navigation</a>{" "}
        - (855) 697-4347
      </li>
      <li>
        Low-income Women, Infants, & Children financial help w/food: WIC RIDH -
        222-4605
      </li>
      <li>
        Pre-diabetic Adults: Progreso Latino, Free Diabetes Prevention Program-
        728-5290
      </li>
      <li>
        Overweight/Obese Teens:{" "}
        <a href="https://www.lifespan.org/centers-services/healthy-eating-active-living-through-hasbro-health">
          CHANGES Program at Hasbro's Children Hospital
        </a>{" "}
        -793-8829
      </li>
      <li>
        Children & Adults attending day-care:{" "}
        <a href="https://www.ride.ri.gov/cnp/NutritionPrograms/ChildandAdultCareFoodProgram.aspx">
          Child & Adult Food Care Program
        </a>
        : 222-4253{" "}
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Nutrition
