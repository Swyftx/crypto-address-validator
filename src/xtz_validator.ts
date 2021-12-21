import base58 from './crypto/base58';
import { TDecode, TDecodeValidator } from './types/validators.types';

const getDecoded: TDecode = (address) => {
  try {
    return base58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

const xtzValidator: TDecodeValidator = {
  isValidAddress: (address) => {
    let decoded = getDecoded(address)

    if (!decoded || !Array.isArray(decoded) || decoded.length !== 27) {
      return false
    }

    return true
  },
  getDecoded
}

export default xtzValidator
