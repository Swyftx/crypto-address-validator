import utils from './crypto/utils'

const ALLOWED_CHARS = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

let regexp = new RegExp('^(zil)1([' + ALLOWED_CHARS + ']+)$') // zil + bech32 separated by '1'

export default {
  isValidAddress: function (address, currency, networkType) {
    let match = regexp.exec(address)
    if (match !== null) {
      return this.verifyChecksum(address)
    } else {
      return false
    }
  },

  verifyChecksum: function (address) {
    let decoded = utils.bech32.decode(address)
    if (decoded !== null) {
      return decoded.data.length === 32
    } else {
      return false
    }
  }
}
