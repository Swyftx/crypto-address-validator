import cryptoUtils from './crypto/utils'
import base58 from './crypto/base58'
import segwit from './crypto/segwit_addr'
console.log('🚀🚀🚀 ~ segwit', segwit.isValidAddress)
import { TAddress, TBaseValidator } from './types/validators.types'
import { TCurrency } from './types/currencies.types'
import { NetTypes } from './types/net.types'
import { HashFunctions } from './types/hashFunctions.types'

let DEFAULT_NETWORK_TYPE = NetTypes.prod

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
    case HashFunctions.blake256keccak256:
      let blake = cryptoUtils.blake2b256(payload)
      return cryptoUtils.keccak256Checksum(Buffer.from(blake, 'hex'))
    case HashFunctions.blake256:
      return cryptoUtils.blake256Checksum(payload)
    case HashFunctions.keccak256:
      return cryptoUtils.keccak256Checksum(payload)
    case HashFunctions.sha256:
    default:
      return cryptoUtils.sha256Checksum(payload)
  }
}

function getAddressType (address: TAddress, currency: TCurrency | null | undefined) {
  // should be 25 bytes per btc address spec and 26 decred
  if(!currency) {
    return false
  }

  let expectedLength = currency.expectedLength || 25
  let hashFunction = currency.hashFunction || HashFunctions.sha256
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

function isValidP2PKHandP2SHAddress (address: TAddress, currency: TCurrency, networkType: NetTypes = DEFAULT_NETWORK_TYPE) {
  const addressType = getAddressType(address, currency)

  if (addressType) {
    let correctAddressTypes

    if (networkType === NetTypes.prod || networkType === NetTypes.testnet) {
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
