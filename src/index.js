import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null
    }
  }

  // 3. Square#render takes in the props.value,
  // and returns the value within itself when rendered
  render() {
    return (
      <button className="square" onClick={ () => this.setState({ value: 'X' }) }>
        {this.state.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      squares: Array(9).fill(null)
    }
  }
  // 2. the method returns a full Square Component,
  //  after having passed in a value of i, from the method params
  renderSquare(i) {
    return <Square value={i}/>
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* 1. this.renderSquare(i) is called here, referring to Board#render */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
