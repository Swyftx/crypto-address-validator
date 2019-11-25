var currencies = require('./currencies')

var DEFAULT_CURRENCY_NAME = 'bitcoin'

module.exports = {

  /**
   * Checks if a given address is valid for the given currency
   *
   * @param {String} address The target address
   * @param {String} currencyNameOrSymbol The name or the symbol/ticker of the currency
   * @param {String} networkType Network Type. Could be 'prod', 'both' and 'testnet'
   * @param {Array} addressFormats Array of formats. For example ['legacy', 'slp ', 'cash']
   * @returns {Error|Boolean}
   */
  validate: function (address, currencyNameOrSymbol, networkType, addressFormats) {
    var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME)

    if (currency && currency.validator) {

      if(!Array.isArray(addressFormats)){
        addressFormats = [];
      }

      return currency.validator.isValidAddress(address, currency, networkType, addressFormats)
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol)
  }
}
