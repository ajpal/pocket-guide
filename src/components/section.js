import PropTypes from "prop-types"
import React from "react"

const Section = ({ title, items }) => (
  <div>
    <h1>{title}</h1>
    <ol>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ol>
  </div>
)

Section.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Section
