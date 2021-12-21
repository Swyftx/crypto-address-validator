import base58 from './crypto/base58';

const getDecoded = (address) => {
  try {
    return base58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}
export default {
  isValidAddress: (address) => {
    let decoded = getDecoded(address)

    if (!decoded || !Array.isArray(decoded) || decoded.length !== 27) {
      return false
    }

    return true
  },

  getDecoded
}
