import JsSHA from 'jssha'
import Blake256 from './blake256'
import sha3  from './sha3';
import Blake2B from './blake2b'
import BECH32 from './bech32'

const { keccak256 } = sha3

const numberToHex = (number) => {
  let hex = Math.round(number).toString(16)

  if (hex.length === 1) {
    hex = '0' + hex
  }

  return hex
}

const toHex = (arrayOfBytes) => {
  let hex = ''

  for (var i = 0; i < arrayOfBytes.length; i++) {
    hex += numberToHex(arrayOfBytes[i])
  }

  return hex
}

const sha256 = (hexString) => {
  var sha = new JsSHA('SHA-256', 'HEX')
  sha.update(hexString)

  return sha.getHash('HEX')
}

const sha256Checksum = (payload) => {
  return sha256(sha256(payload)).substr(0, 8)
}

const blake256 = (hexString) => {
  return new Blake256().update(hexString, 'hex').digest('hex')
}

const blake256Checksum = (payload) => {
  return blake256(blake256(payload)).substr(0, 8)
}

const blake2b = (hexString, outlen) => {
  return new Blake2B(outlen).update(Buffer.from(hexString, 'hex')).digest('hex')
}

const keccak256Checksum = (payload) => {
  return keccak256(payload).toString().substr(0, 8)
}

const blake2b256 = (hexString) => {
  // return new Blake2B(32).update(Buffer.from(hexString, 'hex'), 32).digest('hex') // Idk why second 32 as argument is here
  return new Blake2B(32).update(Buffer.from(hexString, 'hex')).digest('hex')
}

export default {
    numberToHex,
    toHex,
    sha256,
    sha256Checksum,
    blake256,
    blake256Checksum,
    blake2b,
    keccak256Checksum,
    blake2b256,
    keccak256,
    bech32: BECH32
}
