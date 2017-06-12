import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Title from '../components/Title'
import Icon from '../components/Icon'
import Banner from '../images/banner.jpg'
import '../css/index.css'
import 'font-awesome/css/font-awesome.css'

export default class Index extends React.Component {
  render() {
    return (
        <div>
          <figure className="image">
            <img src={Banner} />
          </figure>
          <div className="columns section-divider">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-1 has-text-centered">Our Services</h1>
              <div className="columns">
                <div className="column">
                  <h4 className="title is-4 has-text-centered">Interiors</h4>
                  <div className="has-text-centered service-icon">
                    <Icon className="is-large" name="shower" />
                  </div>
                  <p className="has-text-centered">From bathrooms to basements, we have you covered when it comes to interior remodel.</p>
                </div>
                <div className="column">
                  <h4 className="title is-4 has-text-centered">Kitchens</h4>
                  <div className="has-text-centered service-icon">
                    <Icon className="is-large" name="cutlery" />
                  </div>
                  <p className="has-text-centered">Kitchens are the heart of the home, as well as one of the most sought after renovations.</p>
                </div>
                <div className="column">
                  <h4 className="title is-4 has-text-centered">Exterior Renovations</h4>
                  <div className="has-text-centered service-icon">
                    <Icon className="is-large" name="wrench" />
                  </div>
                  <p className="has-text-centered">Increase your curb appeal with our exterior renovation services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
