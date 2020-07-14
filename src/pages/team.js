import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import TeamTile from "../components/team-tile"

const Team = () => {
  const teamMembers = [
    {
      name: "Jeffrey Lam",
      email: "amspocketguide@brown.edu",
      description: "MS3, Alpert Medical School",
      image: "",
    },
    {
      name: "Jared DiChiara",
      email: "amspocketguide@brown.edu",
      description: "CSC IT Admin, Alpert Medical School",
      image: "",
    },
    {
      name: "Julia Noguchi",
      email: "",
      description:
        "Assistant Director, Doctoring Program, Alpert Medical School",
      image: "",
    },
    {
      name: "Nadine Najah",
      email: "nadine_najah@brown.edu",
      description: "First-Year, Brown University",
      image: "",
    },
    {
      name: "Victoria Koenigsberger",
      email: "victoria_koenigsberger@brown.edu",
      description: "Second-Year, Brown University",
      image: "",
    },
    {
      name: "Shreya Ramayya",
      email: "shreya_ramayya@brown.edu",
      description: "MS1, Alpert Medical School",
      image:
        "https://lh3.googleusercontent.com/s6d65FwZ2vXdchv3-ab1pHrBDTrBmQeBqyzDi2KCPu659FvZOlseJF91lVhnvTeJ_uVA72P7VH6bNR4dcfdzeikiZ-AkN0XSzBDsIG5ZnmzZ22ssvO4z=w371",
    },
  ]
  return (
    <Layout>
      <Header siteTitle={"Team/Acknowledgments"} />
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {teamMembers.map(person => (
          <TeamTile
            key={person.name}
            name={person.name}
            email={person.email}
            description={person.description || ""}
            image={person.image || ""}
          />
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Team
