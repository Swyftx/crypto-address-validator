let regexp = new RegExp('^(bnb)([a-z0-9]{39})$') // bnb + 39 a-z0-9

export default {
  isValidAddress: function (address, currency, networkType) {
    let match = regexp.exec(address)
    return match !== null
  }
}
