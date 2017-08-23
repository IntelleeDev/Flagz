import React from 'react';
import CustomWidgets from './CustomWidgets'

function Main(props) {
  return (
    <div>
      <section className="content-box">
        <Logo/>
        <ProfileBox playerName={props.playerName} onChange={props.onChange}/>
      </section>
      <CustomWidgets.Footer/>
    </div>
  )
}  

function ProfileBox(props) {
  return (
    <div className="profile-box">
      <label className="text-label">Enter your name</label>
      <input 
        value={props.playerName}
        onChange={props.onChange}
        placeholder="John Doe"
        className="fancy-input" />
      <div>
        <StartButton/>
      </div>
    </div>
  )
}

function Logo(props) {
  return (
    <div>
      <h4 className="logo-text">Flagz</h4>
    </div>
  )
}

function StartButton() {
  return (
    <div style={{ textAlign: 'center', margin: '20px auto' }}>
      <CustomWidgets.CustomLink to="/selection" text="begin"/>
    </div>
  )
}

export default Main