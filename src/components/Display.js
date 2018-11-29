import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ result }) => <h1>{result}</h1>

Display.propTypes = {
  result: PropTypes.string.isRequired
}

Display.defaultProps = {
  result: '0'
}

export default Display
