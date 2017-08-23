import React, {Component} from 'react'
import './game.css'
import Timer from './Timer'
import CustomWidgets from './CustomWidgets'
import { Redirect } from 'react-router-dom' 

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: 6000,
      isGameOver: false,
      answer: '',
      currentFlagIndex: 0,
    }
  }

  flagsWithOps = ((location) => {
    try {
      return require(`../flags/${location}.js`).default
    }
    catch(error) {
      console.log(error)
    }
  })(this.props.selectedContinent.name)

  nextFlag = () => {
    this.setState((prevState) => {
      return { 
        currentFlagIndex: ++prevState.currentFlagIndex
      }
    })
  }

  previousFlag = () => {
    this.setState((prevState) => {
      return {
        currentFlagIndex: --prevState.currentFlagIndex
      }
    })
  }

  handleOptionClick = (playerAnswer) => {
    const correctAnswer = this.flagsWithOps[this.state.currentFlagIndex].correctAnswer

    if (this.state.currentFlagIndex >= this.flagsWithOps.length) {
      this.setState({ isGameOver: true })
      return null
    }

    if (playerAnswer === correctAnswer) {
      this.props.scorePlayer()
      this.nextFlag()
    }
    else {
      this.setState({ isGameOver: true })
    }           
  }

  redirectToGameOver() {
    return <Redirect to="/gameover" />
  }
  
  render() {

    if (this.flagsWithOps == null) {
      return <Redirect to="/error"/>
    }

    const isGameOver = this.state.isGameOver
    
    return (
      <section>
        {!isGameOver
          ? <div>
              <Timer
                isGameOver={isGameOver} 
                redirectTo={this.redirectToGameOver} 
                currentTime={this.state.currentTime} />
              <CustomWidgets.StatusBar message={this.props.playerName} />
              <div className="game-box">
                <CustomWidgets.CustomLabel className="label" text="What country's flag is this?" />
                <FlagOptionsBox 
                  onClick={this.handleOptionClick} 
                  flag={this.flagsWithOps[this.state.currentFlagIndex]} />
              </div>
              <CustomWidgets.Footer />
            </div>
          : <div>
              <Timer
                isGameOver={isGameOver} 
                redirectTo={this.redirectToGameOver} 
                currentTime={this.state.currentTime} />
              <Redirect to="/gameover"/>
            </div>
        }
      </section>
    )
  }  
}

const FlagOptionsBox = ({ flag, onClick }) => (
  <div>
    <FlagFrame src={flag.src} />
    <Options onClick={onClick} options={flag.options}/>
  </div>
)

const FlagFrame = ({ src }) => (
  <div className="flag-box">
    <img className="flag" src={src} alt="Nigeria" />
  </div>
)

const Options = ({ options, onClick }) => (
  <div className="options-box">
    {options.map((option, key) => (
        <Option key={key} title={option} onClick={() => onClick(key)} />
    ))}
  </div>
)

const Option = ({ title, onClick }) => (
  <button 
    onClick={onClick}
    className="fancy-button fancy-button--outline">
      {title}
  </button>
)

const NextButton = ({ onClick }) => (
  <button 
    className="fancy-button fancy-button--colored fancy-button--inline" onClick={onClick}>
    next
  </button>
)

const PreviousButton = ({ onClick }) => (
  <button   
    className="fancy-button fancy-button--colored fancy-button--inline" onClick={onClick}>
    previous
  </button>
)

export default Game