const path = require('path')
const btcValidator = require(path.join(__dirname, 'bitcoin_validator'))
var regexp = new RegExp('^sys1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}$')

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return regexp.test(address) || btcValidator.isValidAddress(address, currency, networkType)
  }
}
