import React, { Component } from 'react'
import Icon from '../components/Icon'

import fetch from  'isomorphic-fetch'

const defaultState = {
  form: {
    name: '',
    email: '',
    subject: '',
    question: '',
    errors: {}
  },
  formSent: false,
}

export default class ContactForm extends Component {

  constructor (props) {
    super(props)

    this.state = { ...defaultState }
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form 
          name="contact" 
          method="post"
          action="/thanks/" 
          data-netlify="true"
          data-netlify-honeypot="eri-bot-field"
        >
            <input type="hidden" name="form-name" name="contact" />
            <input type="hidden" name="eri-bot-field" />

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">From</label>
              </div>
              <div className="field-body">
                <div className="field is-grouped">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" name="name" type="text" placeholder="Name" value={this.state.form.name} onChange={this.handleChange} />
                    <Icon name="user" className="is-small is-left" />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" name="email" value={this.state.form.email} onChange={this.handleChange} />
                    <Icon name="envelope" className="is-small is-left" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Subject</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="e.g. Renovation Inquiry" name="subject" value={this.state.form.subject} onChange={this.handleChange} />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Question</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea className="textarea" placeholder="Explain how we can help you" name="question" value={this.state.form.question} onChange={this.handleChange} ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary" onClick={this.handleSubmit}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

const SuccessMessage = () => {
  return (
    <div className="notification is-success" style={{ textAlign: 'center' }}>
      Thank you for your feedback, we will get back to you soon!
    </div>
  )
}