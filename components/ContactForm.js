import React from 'react'
import Icon from './Icon'

export default () => {
  return (
    <form name="contact" className="field is-horizontal" netlify action="contact">
      <div className="field-label is-normal">
        <label className="label">From</label>
      </div>
      <div className="field-body">
        <div className="field is-grouped">
          <p className="control is-expanded has-icons-left">
            <input className="input" type="text" placeholder="Name" />
            <Icon name="user" className="is-small is-left" />
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <Icon name="envelope" className="is-small is-left" />
          </p>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
        <div className`="field is-horizontal">
          <div className`="field-label">
          </div>
          <div className`="field-body">
            <div className`="field">
              <div className`="control">
                <button className`="button is-primary">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}