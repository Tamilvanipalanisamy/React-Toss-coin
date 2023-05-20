import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  clickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    const changeImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={changeImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.clickTossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{totalCount}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
