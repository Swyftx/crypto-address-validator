var BCH = require('bchaddrjs-slp')

var DEFAULT_ADDRESS_FORMAT = 'legacy'
var DEFAULT_NETWORK_TYPE = 'prod'

function isAValidAddress (address) {
  try {
    BCH.decodeAddress(address)
    return true
  } catch (error) {
    return false
  }
}

function isValidAddressFormat (addressFormat) {
  var validAddressFormat = false
  switch (addressFormat) {
    case 'all':
      validAddressFormat = true
      break
    case BCH.Format.Legacy:
      validAddressFormat = true
      break
    case BCH.Format.Bitpay:
      validAddressFormat = true
      break
    case BCH.Format.Cashaddr:
      validAddressFormat = true
      break
    case BCH.Format.Slpaddr:
      validAddressFormat = true
      break
  }

  return validAddressFormat
}

function isValidNetworkType (address, networkType) {
  networkType = networkType.toLowerCase().trim()
  if (networkType === 'prod' || networkType === 'testnet') {
    if (networkType === 'prod') {
      return BCH.isMainnetAddress(address)
    }

    return BCH.isTestnetAddress(address)
  }

  //TODO: check if this is okay? Defaults to true if not prod or testnet? Probably 'both'?
  return true
}

function isValidBitcoinCashAddress (address, currency, networkType, addressFormats) {
  var isValid = false

  for (var i = 0; i < addressFormats.length; i++) {

    var addressFormat = addressFormats[i].toLowerCase().trim()
    if (!isValidAddressFormat(addressFormat)) {
      continue
    }

    try {
      switch (addressFormat) {
        case 'all':
          if (isAValidAddress(address)) {
            isValid = true
          }
          break
        case BCH.Format.Legacy:
          if (BCH.isLegacyAddress(address)) {
            isValid = true
          }
          break
        case BCH.Format.Bitpay:
          if (BCH.isBitpayAddress(address)) {
            isValid = true
          }
          break
        case BCH.Format.Cashaddr:
          if (BCH.isCashAddress(address)) {
            isValid = true
          }
          break
        case BCH.Format.Slpaddr:
          if (BCH.isSlpAddress(address)) {
            isValid = true
          }
          break
      }
    } catch (error) {
      continue
    }

    if (isValid) {
      break
    }
  }

  if (!isValid) {
    return false
  }

  return isValidNetworkType(address, networkType)
}

module.exports = {
  /**
   * Checks if a given address is valid for the given currency
   *
   * @param {String} address The target address
   * @param {Object} currency A currency from the ./currencies.js array
   * @param {String} networkType Network Type. Could be 'prod', 'both' and 'testnet'
   * @param {Array} addressFormats Array of formats. Options are: 'legacy', 'cashaddr', 'bitpay', 'slpaddr', 'all'
   * @returns {Error|Boolean}
   */
  isValidAddress: function (address, currency, networkType, addressFormats) {
    networkType = networkType || DEFAULT_NETWORK_TYPE
    if (!addressFormats.length || !Array.isArray(addressFormats)) {
      addressFormats = [DEFAULT_ADDRESS_FORMAT]
    }

    return isValidBitcoinCashAddress(address, currency, networkType, addressFormats)
  }
}
