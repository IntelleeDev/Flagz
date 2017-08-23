import React from 'react'
import { Link } from 'react-router-dom'

const CustomWidgets = {
  CustomLink: ({ to, text }) => (
    <div style={{ textAlign: 'center' }}>
      <Link className="fancy-button fancy-button--colored" to={to}>{text}</Link>
    </div>
  ),
  CustomButton: ({ id, className, onClick, text }) => (
    <div>
      <button id={id} className={className} onClick={onClick}>{ text }</button>
    </div>
  ),
  CustomLabel: ({ text, className }) => (
    <div className={className}>
      <h4>{ text }</h4>
    </div>
  ),
  Footer: () => (
    <footer className="footer">
      <span>Built with</span>
      <span>
        <strong> React</strong>
      </span> 
    </footer>
  ),
  StatusBar: ({ message }) => (
    <section>
      <h5 className="game-status">{ message }</h5>
    </section>
  ),
  LabeledRadioButton: (props) => (
    <div>
      <label>{props.labelTitle}</label>
      <input onChange={props.onChange} value={props.value || false } type="radio" name={props.name} />
    </div>
  )
}

export default CustomWidgets