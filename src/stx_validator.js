var { c32addressDecode } = require('c32check')

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return this.verifyChecksum(address)
  },

  verifyChecksum: function (address) {
    let valid = false
    try {
      if (c32addressDecode(address)) {
        valid = true
      }
    } catch (e) {
      valid = false
    }
    return valid
  }
}
