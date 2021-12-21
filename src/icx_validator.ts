function isValidICXAddress (address, currency, networkType) {
  let regex = /^hx[0-9a-f]{40}$/g // Begins with hx followed by 40 hex chars
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

export default {
  isValidAddress: function (address, currency, networkType) {
    return isValidICXAddress(address, currency, networkType)
  }
}
