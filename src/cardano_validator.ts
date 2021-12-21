import cbor from 'cbor-js'
import CRC from 'crc'
import base58 from  './crypto/base58'

function getDecoded (address) {
  try {
    let decoded = base58.decode(address)
    return cbor.decode(new Uint8Array(decoded).buffer)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

export default {
  isValidAddress: function (address) {
    let decoded = getDecoded(address)

    if (!decoded || (!Array.isArray(decoded) && decoded.length !== 2)) {
      return false
    }

    let tagged = decoded[0]
    let validCrc = decoded[1]
    if (typeof (validCrc) !== 'number') {
      return false
    }

    // get crc of the payload
    let crc = CRC.crc32(tagged)

    return crc === validCrc
  }
}
