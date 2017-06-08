import React from 'react'
import Title from './Title'
import Icon from '../components/Icon'
import ContactForm from '../components/ContactForm'

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <Title size={1}>Contact Us</Title>
          <Title isSubtitle={true} size={5}>How to get a hold of us</Title>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <div className="columns">
              <div className="column is-one-quarter has-text-right">
                <Icon name="map-marker" />
              </div>
              <div className="column">
                <address>
                  Enhanced Interiors Remodeling<br/> 
                  1505 Sherwood Rd.<br/> 
                  Shoreview MN, 55126<br/> 
                </address>
              </div>
            </div>
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}