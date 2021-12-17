function isValidLiskAddress (address, currency, networkType) {
  var regex = /^[0-9]{6,10}$/g // Must be numbers only for the first 1 - 20 charactors with a capital L at the end
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidLiskAddress(address, currency, networkType)
  }
}
