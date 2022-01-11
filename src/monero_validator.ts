import cryptoUtils from './crypto/utils'
import cnBase58 from './crypto/cnBase58'
import { TAddress, TBaseValidator } from './types/validators.types'
import { NetTypes, TAddressType } from './types/net.types'
import { TCurrency } from './types/currencies.types'

// TODO refactor

let DEFAULT_NETWORK_TYPE = NetTypes.prod
let addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$')
let integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$')

const validateNetwork = (decoded: string, currency: TCurrency, networkType: NetTypes, addressType: TAddress) => {
  let network = currency.addressTypes
  if (addressType === 'integrated') {
    network = currency.iAddressTypes
  }

  let networkByte = parseInt(decoded.substr(0, 2), 16).toString()

  switch (networkType) {
    case NetTypes.prod:
      return network.prod.indexOf(networkByte) !== -1
    case NetTypes.testnet:
      return network.testnet.indexOf(networkByte) !== -1
    case NetTypes.both:
      return network.prod.indexOf(networkByte) !== -1 || network.testnet.indexOf(networkByte) !== -1
    default:
      return false
  }
}

function hexToBin (hex: string): null | Uint8Array {
  if (hex.length % 2 !== 0) return null
  let res = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return res
}

export const moneroValidator: TBaseValidator = {
  isValidAddress: function (address, currency, networkType) {
    networkType = networkType || DEFAULT_NETWORK_TYPE
    let addressType: TAddressType = 'standard'
    if (!addressRegTest.test(address)) {
      if (integratedAddressRegTest.test(address)) {
        addressType = 'integrated'
      } else {
        return false
      }
    }

    let decodedAddrStr = cnBase58.decode(address)
    if (!decodedAddrStr) { return false }

    if (!validateNetwork(decodedAddrStr, currency, networkType, addressType)) {
      return false
    }

    let addrChecksum = decodedAddrStr.slice(-8)
    let hashChecksum = cryptoUtils.keccak256Checksum(Buffer.from(hexToBin(decodedAddrStr.slice(0, -8))))

    return addrChecksum === hashChecksum
  }
}

export default moneroValidator
