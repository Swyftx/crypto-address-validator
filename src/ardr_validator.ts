const ardorRegex = new RegExp('^ARDOR(-[A-Z0-9]{4}){3}(-[A-Z0-9]{5})$')

export default {
  isValidAddress: function (address, currency, networkType) {
    if (!ardorRegex.test(address)) {
      return false
    }

    return true
  }
}
