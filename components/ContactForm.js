import React from 'react'
import Icon from './Icon'

export default () => {
  return (
    <form name="contact" className="field is-horizontal" netlify>
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
    </form>
  );
}