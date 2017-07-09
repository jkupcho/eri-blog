import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import 'font-awesome/css/font-awesome.css'
import '../css/site.scss'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {

    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Enhanced Interiors Remodeling Homepage" },
            { name: "keywords", content: "home" },
          ]}
        />
        <Nav></Nav>
        <div>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
