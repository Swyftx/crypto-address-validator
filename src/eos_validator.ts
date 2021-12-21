function isValidEOSAddress (address, currency, networkType) {
  let regex = /^[a-z0-9]+$/g // Must be numbers and lowercase letters only
  if (address.search(regex) !== -1 && address.length === 12) {
    return true
  } else {
    return false
  }
}

export default {
  isValidAddress: function (address, currency, networkType) {
    return isValidEOSAddress(address, currency, networkType)
  }
}
