import base58 from './crypto/base58';

function getDecoded (address) {
  try {
    let decoded = base58.decode(address)
    return decoded
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

export default {
  isValidAddress: function (address) {
    let decoded = getDecoded(address)

    if (!decoded) {
      return false
    }

    if (decoded.length !== 37) {
      return false
    }

    if (decoded[0] !== 42) {
      return false
    }

    return true
  }
}
