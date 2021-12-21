import cryptoUtils from './crypto/utils'
import cnBase58 from './crypto/cnBase58'

let DEFAULT_NETWORK_TYPE = 'prod'
let addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$')
let integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$')

function validateNetwork (decoded, currency, networkType, addressType) {
  let network = currency.addressTypes
  if (addressType === 'integrated') {
    network = currency.iAddressTypes
  }

  let networkByte = parseInt(decoded.substr(0, 2), 16).toString()

  switch (networkType) {
    case 'prod':
      return network.prod.indexOf(networkByte) !== -1
    case 'testnet':
      return network.testnet.indexOf(networkByte) !== -1
    case 'both':
      return network.prod.indexOf(networkByte) !== -1 || network.testnet.indexOf(networkByte) !== -1
    default:
      return false
  }
}

function hextobin (hex) {
  if (hex.length % 2 !== 0) return null
  let res = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return res
}

export default {
  isValidAddress: function (address, currency, networkType) {
    networkType = networkType || DEFAULT_NETWORK_TYPE
    let addressType = 'standard'
    if (!addressRegTest.test(address)) {
      if (integratedAddressRegTest.test(address)) {
        addressType = 'integrated'
      } else {
        return false
      }
    }

    let decodedAddrStr = cnBase58.decode(address)
    if (!decodedAddrStr) { return false }

    if (!validateNetwork(decodedAddrStr, currency, networkType, addressType)) { return false }

    let addrChecksum = decodedAddrStr.slice(-8)
    let hashChecksum = cryptoUtils.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)))

    return addrChecksum === hashChecksum
  }
}
