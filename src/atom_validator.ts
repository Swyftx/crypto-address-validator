import utils from './crypto/utils'

const ALLOWED_CHARS = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'
const regexp = new RegExp('^(cosmos)1([' + ALLOWED_CHARS + ']+)$') // cosmos + bech32 separated by '1'

const verifyChecksum = (address) => {
  let decoded = utils.bech32.decode(address)
  if (decoded !== null) {
    return decoded.data.length === 32
  } else {
    return false
  }
}

export default {

  isValidAddress: (address, currency, networkType) => {
    let match = regexp.exec(address)
    if (match !== null) {
      return verifyChecksum(address)
    } else {
      return false
    }
  },

  verifyChecksum
}
