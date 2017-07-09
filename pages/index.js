import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Title from '../components/Title'
import Icon from '../components/Icon'
import Banner from '../images/banner.jpg'
import AboutUsImage from '../images/dusolds-540x460.jpg'
import '../css/index.css'

export default class Index extends React.Component {
  render() {
    return (
        <div>
          <figure className="image">
            <img src={Banner} />
          </figure>
          <div className="columns section-divider" style={{marginBottom: '25px'}}>
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
          <section className="section has-shadow" style={{backgroundColor: '#f5f1f5', borderTop: '1px solid #cfcfcf', borderBottom: '1px solid #cfcfcf'}}>
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-1 has-text-centered">About Us</h1>
              <div className="content">
                <div style={{margin: '20px 20px'}}>
                  <img className="is-centered" src={AboutUsImage} width={350} height={350} style={{display: 'block', margin: 'auto'}} />
                </div>
                <p>Enhanced Interiors Remodeling is a family owned, Father and Son company. Established in 1989 by Bill Dusold, Enhanced Interiors Remodeling was started with the intention of remodeling only the interiors of the homes. As time progressed, the natural evolution was to provide complete home remodeling services while maintaining its original name.</p>

                <p>
  While enjoying a successful engineering career, Bill started Enhanced Interiors Remodeling
  business. Lacking tangible evidence of improvements while in industry, Bill was spurred by the
  constant and unlimited change in the remodeling process. As Bill has always stated, "At the end of
  a day, there will be change."
                </p>

                <p>
  Following in his fathers footsteps Andy Dusold attended Dunwoody College of Technology and
  received a degree in Architectural Drafting and Estimating. After working for Lennar Homes as a
  construction coordinator and DAFC as a site supervisor, Andy decided that the time was right to go
  to work along side his father. Together they are solely responsible for the success of the company.
                </p>

                <p>
  Bill and Andy have a great understanding of the hard work it takes to provide excellent quality
  and superior customer service. Just as their motto states “Working with the customer from
  conception through completion” Enhanced Interiors Remodeling will work for you.
                </p>
              </div>
            </div>
          </section>
          <div className="section-divider"></div>
        </div>
    )
  }
}
