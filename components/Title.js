import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Title = ({size, isSubtitle, className, children}) => {
  const classes = classNames({ 'title': !isSubtitle, 'subtitle': isSubtitle, [`is-${size}`] : true }, className)
  return (
    <h1 className={classes}>{children}</h1>
  )
}

Title.propTypes = {
  size: PropTypes.oneOf([1,2,3,4,5,6]).isRequired,
  isSubtitle: PropTypes.bool
}

Title.defaultProps = {
  isSubtitle: false,
  className: ''
}

export default Title;