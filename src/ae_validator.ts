import base58 from './crypto/base58'
import { TChecksumValidator } from './types/validators.types'


const ALLOWED_CHARS = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

let regexp = new RegExp('^(ak_)([' + ALLOWED_CHARS + ']+)$') // Begins with ak_ followed by

const aeValidator: TChecksumValidator = {
  isValidAddress: function (address, currency, networkType) {
    let match = regexp.exec(address)
    if (match !== null) {
      return this.verifyChecksum(match[2])
    } else {
      return false
    }
  },

  verifyChecksum: (address) => {
    let decoded = base58.decode(address)
    decoded.splice(-4, 4) // remove last 4 elements. Why is base 58 adding them?
    return decoded.length === 32
  }
}

export default aeValidator
