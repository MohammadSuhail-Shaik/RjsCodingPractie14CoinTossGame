// Write your code here
import {Component} from 'react'

import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const imgAlt = 'toss result'

class CoinToss extends Component {
  state = {
    status: true,
    headScore: 0,
    tailsScore: 0,
    totalScore: 0,
  }

  changeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    const finalStatus = tossResult === 0

    this.setState({status: finalStatus})

    if (finalStatus) {
      this.setState(prevValue => ({
        headScore: prevValue.headScore + 1,
        totalScore: prevValue.totalScore + 1,
      }))
    } else {
      this.setState(prevValue => ({
        tailsScore: prevValue.tailsScore + 1,
        totalScore: prevValue.totalScore + 1,
      }))
    }
  }

  render() {
    const {status, headScore, tailsScore, totalScore} = this.state
    const imgUrl = status ? tailsImgUrl : headsImgUrl
    return (
      <div className="app-con">
        <div className="app-card-con">
          <h1 className="hding">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img alt={imgAlt} src={imgUrl} className="img-size" />
          <button type="button" className="btn" onClick={this.changeToss}>
            Toss Coin
          </button>
          <div className="tags-con">
            <p className="each-tag">Total: {totalScore}</p>
            <p className="each-tag">Heads: {headScore}</p>
            <p className="each-tag">Tails: {tailsScore}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
