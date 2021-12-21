import cryptoUtils from './crypto/utils'
import base58 from './crypto/base58'
import segwit from './crypto/segwit_addr'
import { TBaseValidator } from './types/validators.types'

let DEFAULT_NETWORK_TYPE = 'prod'

function getDecoded (address) {
  try {
    return base58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

function getChecksum (hashFunction, payload) {
  // Each currency may implement different hashing algorithm
  switch (hashFunction) {
    // blake then keccak hash chain
    case 'blake256keccak256':
      let blake = cryptoUtils.blake2b256(payload)
      return cryptoUtils.keccak256Checksum(Buffer.from(blake, 'hex'))
    case 'blake256':
      return cryptoUtils.blake256Checksum(payload)
    case 'keccak256':
      return cryptoUtils.keccak256Checksum(payload)
    case 'sha256':
    default:
      return cryptoUtils.sha256Checksum(payload)
  }
}

function getAddressType (address, currency) {
  currency = currency || {}
  // should be 25 bytes per btc address spec and 26 decred
  let expectedLength = currency.expectedLength || 25
  let hashFunction = currency.hashFunction || 'sha256'
  let decoded = getDecoded(address)

  if (decoded) {
    let length = decoded.length

    if (length !== expectedLength) {
      return null
    }

    if (currency.regex) {
      if (!currency.regex.test(address)) {
        return false
      }
    }

    let checksum = cryptoUtils.toHex(decoded.slice(length - 4, length))

    let body = cryptoUtils.toHex(decoded.slice(0, length - 4))

    let goodChecksum = getChecksum(hashFunction, body)

    return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null
  }

  return null
}

function isValidP2PKHandP2SHAddress (address, currency, networkType) {
  networkType = networkType || DEFAULT_NETWORK_TYPE

  let correctAddressTypes
  let addressType = getAddressType(address, currency)

  if (addressType) {
    if (networkType === 'prod' || networkType === 'testnet') {
      correctAddressTypes = currency.addressTypes[networkType]
    } else {
      correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet)
    }

    return correctAddressTypes.indexOf(addressType) >= 0
  }

  return false
}

const bitCoinValidator: TBaseValidator = {
  isValidAddress: function (address, currency, networkType) {
    return isValidP2PKHandP2SHAddress(address, currency, networkType) || segwit.isValidAddress(address)
  }
}

export default bitCoinValidator
