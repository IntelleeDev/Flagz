import React, {Component} from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: this.props.currentTime
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateTimer()
    }, 1000)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return null;
    }
    this.setState({
      currentTime: nextProps.currentTime
    })
  }

  componentWillUnMount() {
    this.stopTimer()
  }
  
  updateTimer() {
    this.setState((prevState) => {
      return { currentTime: --prevState.currentTime }
    })  
  }

  stopTimer() {
    clearInterval(this.timerId)
  }

  resetTimer() {
    this.props.onNextFlag()
  }

  render() {

    if (this.props.isGameOver) {
      this.stopTimer()
    }

    const isTimeUp = hasTimeElapsed(this.state.currentTime)
    if (isTimeUp) {
      this.stopTimer()
      alert('Time is Up!')
    }
    
    const redirectTo = this.props.redirectTo() 

    return (
      <div className="timer">
        { (isTimeUp) 
          ? redirectTo 
          : <h4>{this.state.currentTime} <span style={{ fontSize: '10px' }}>s</span></h4> }
      </div>
    )
  }
}

function hasTimeElapsed(currentTime) {
  return (currentTime <= 0) ? true : false
}

export default Timer