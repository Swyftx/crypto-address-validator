function isValidBTSAddress (address, currency, networkType) {
  let regex = /^[a-z0-9-.]+$/g // Must be numbers and lowercase letters only
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

export default {
  isValidAddress: function (address, currency, networkType) {
    return isValidBTSAddress(address, currency, networkType)
  }
}
