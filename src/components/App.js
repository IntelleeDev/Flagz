import React, {Component} from 'react'
import Main from './Main'
import Game from './Game'
import GameOver from './GameOver'
import Selection from './Selection'
import Error404 from './Error404'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const SCORE_PER_GUESS = 10

const CONTINENTS  = [
  { name: 'Africa', selected: false },
  { name: 'Oceania', selected: false },
  { name: 'Asia', selected: false },
  { name: 'South-America', selected: false },
  { name: 'Europe', selected: false },
  { name: 'North-America', selected: false }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      continents: CONTINENTS.slice(0, CONTINENTS.length),
      pickedContinent: '',
      playerScore: 0
    }
  }

  handleChange = event => {
    const playerName = event.target.value
    this.setState({ playerName })
  }

  selectContinent = index => {
    const continents = this.state.continents.slice(0, this.state.continents.length)
    let pickedContinent = null
    
    const newContinents = continents.map((continent, key) => {
      if (index === key) {
        continent.selected = true
        pickedContinent = continent
      }
      else {
        continent.selected = false
      } 
      return continent
    })
    this.setState({ continents: newContinents, pickedContinent })
  }

  scorePlayer = () => {
    this.setState((prevState) => {
      return { playerScore: prevState.playerScore + SCORE_PER_GUESS }
    })
  }

  resetScore = () => {
    this.setState({ playerScore: 0 })
  }
  
  render() {
    
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => 
              <Main  
                onChange={this.handleChange}
                playerName={this.state.playerName} /> }/> 
            <Route path="/selection" render={() => 
              <Selection 
                continents={this.state.continents}
                playerName={this.state.playerName}
                onClick={index => this.selectContinent(index)} /> }/>
            <Route path="/game" render={() => 
              <Game
                scorePlayer={this.scorePlayer}
                playerName={this.state.playerName} 
                selectedContinent={this.state.pickedContinent} /> }/>
            <Route path="/gameover" render={() =>
              <GameOver
                resetScore={this.resetScore} 
                playerScore={this.state.playerScore} /> }/>
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App