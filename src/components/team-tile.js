import PropTypes from "prop-types"
import React from "react"

import placeholder from "../images/placeholder.png"
const TeamTile = ({ name, email, description, image }) => (
  <div style={{ flex: 1 }}>
    {image ? (
      <img style={{ maxWidth: 200 }} src={image} alt={`Headshot of ${name}`} />
    ) : (
      <img
        style={{ maxWidth: 200 }}
        src={placeholder}
        alt={`placeholder for ${name}`}
      />
    )}
    <h1 style={{ fontSize: 28 }}>
      {email ? (
        <a href={`mailto:${email}`} style={{ color: "black" }}>
          {name}
        </a>
      ) : (
        name
      )}
    </h1>
    <h2 style={{ fontSize: 11 }}>{description}</h2>
  </div>
)

TeamTile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default TeamTile
