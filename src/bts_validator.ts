function isValidBTSAddress (address, currency, networkType) {
  var regex = /^[a-z0-9-.]+$/g // Must be numbers and lowercase letters only
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidBTSAddress(address, currency, networkType)
  }
}
