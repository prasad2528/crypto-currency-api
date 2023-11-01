import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = currencyDetails
  return (
    <li className="currency-headings">
      <div className="currency-heading">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="headings">{currencyName}</p>
      </div>
      <div className="value-headings">
        <p className="values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
