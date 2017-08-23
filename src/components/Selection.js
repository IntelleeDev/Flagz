import React from 'react'
import './selection.css'
import CustomWidgets from './CustomWidgets'
import earth  from './earth.png'

const Selection = ({ playerName, continents, onClick }) => ( 
  <section>
    <CustomWidgets.StatusBar message={`Hello! ${playerName}`} />
    <div className="selection-box">
      <CustomWidgets.CustomLabel 
        className="label"
        text="Select a continent" />
      <ListOfContinents 
        onClick={i => onClick(i)}
        continents={continents} />
      <ContinueButton />
    </div>
    <CustomWidgets.Footer/>
  </section>  
)

const ListOfContinents = ({ continents, onClick }) => (
  <div className="continents-list">
    {continents.map((continent, key) => (
      <ContinentItem 
        key={key}
        name={continent.name}
        onClick={() => onClick(key) }
        activeClass={(continent.selected) ? 'active' : null}   />
    ))}
  </div>
)

const ContinentItem = ({ name, activeClass, onClick }) => (
  <div onClick={onClick} className={`continent-item ${activeClass}`}>
    <img className="image" src={earth} alt="" />
    <span className="title">{name}</span>
  </div>
)

const ContinueButton = () => (
  <CustomWidgets.CustomLink to="/game" text="continue"/>
)

export default Selection