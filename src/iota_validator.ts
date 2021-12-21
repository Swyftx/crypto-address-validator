import IOTA from '@iota/validators'

function isValidIotaAddress (address, currency, networkType) {
  let isValid = IOTA.isAddress(address)
  return isValid
}

export default {
  isValidAddress: function (address, currency, networkType) {
    return isValidIotaAddress(address, currency, networkType)
  }
}
