import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}


import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}


setInterval(() => { first }, second);

setTimeout(() => { first }, second);



