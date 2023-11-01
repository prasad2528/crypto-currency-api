// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderList = () => {
    const {currencyList} = this.props
    return (
      <ul className="table-container">
        <div className="list-headings">
          <h2 className="headings">Coin Type</h2>
          <div className="sub-headings">
            <h2 className="headings">USD</h2>
            <h2 className="headings">EURO</h2>
          </div>
        </div>
        {currencyList.map(eachData => (
          <CryptocurrencyItem key={eachData.id} currencyDetails={eachData} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="card-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderList()}
      </div>
    )
  }
}
export default CryptocurrenciesList
