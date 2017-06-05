import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Icon = ({name, className}) => {
  const iconClass = classNames('fa', [`fa-${name}`])
  const spanClass = classNames('icon', className)
  return (
    <span className={spanClass}>
      <i className={iconClass}></i>
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {
  className: ''
}

export default Icon;
