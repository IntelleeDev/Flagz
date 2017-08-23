import React, {Component} from 'react'
import './gameover.css'
import { Redirect, withRouter } from 'react-router-dom'
import CustomWidgets from './CustomWidgets'

const GameOver = ({ playerScore, resetScore }) => (
  <section className="score-box">
    <CustomWidgets.StatusBar message="Game over" />
    <div className="">        
      <ScoreBoard playerScore={playerScore} />
      <PlayAgain onClick={resetScore} />
    </div>
    <CustomWidgets.Footer />
  </section>
)
 
const ScoreBoard = ({ playerScore }) => (
  <div>
    <CustomWidgets.CustomLabel className="score-label" text="Your Score" />
    <CustomWidgets.CustomLabel className="score-point" text={playerScore} />
  </div>
)

const YesButton = withRouter(({ history, onClick }) => (
  <button className="fancy-button fancy-button--colored" onClick={() => {
    onClick()
    history.push('/selection')
  }}>Yes</button>
))

const NoButton = withRouter(({ history, onClick }) => (
  <button className="fancy-button fancy-button--colored" onClick={() => {
    onClick()
    history.push('/')
  }}>No</button>
))

const PlayAgain = ({ onClick }) => (
  <div>
    <CustomWidgets.CustomLabel text="Would you like to play again?" />
    <div className="radio-container">
      <YesButton onClick={onClick} />
      <NoButton onClick={onClick} />
    </div>
  </div>
)

export default GameOver