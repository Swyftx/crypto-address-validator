function isValidSCAddress (address, currency, networkType) {
  var regex = /^[0-9a-f]{76}$/g // 76 hex chars
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidSCAddress(address, currency, networkType)
  }
}
