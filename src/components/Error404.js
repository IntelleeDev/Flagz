import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => (
  <div className="error404">
    <h2>Huh! Seems like you hit a dead end...Check back later</h2>
    <Link to="/" className="fancy-button fancy-button--colored">home</Link>
  </div>
)

export default Error404