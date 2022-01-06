import cbor from 'cbor-js'
import CRC from 'crc'
import { base58_to_binary } from 'base58-js'
import { TBaseValidator } from './types/validators.types'

function getDecoded (address) {
  try {
    const decodedRaw = base58_to_binary(address)
    return cbor.decode(decodedRaw.buffer)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

const cardanoValidation: TBaseValidator = {
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

export default cardanoValidation
