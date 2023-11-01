import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getFullCurrencyData()
  }

  getFullCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <CryptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
