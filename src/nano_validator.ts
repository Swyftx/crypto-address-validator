import cryptoUtils from './crypto/utils';
import baseX from 'base-x';
import { TBaseValidator, TChecksumValidator } from './types/validators.types';

let ALLOWED_CHARS = '13456789abcdefghijkmnopqrstuwxyz'

let codec = baseX(ALLOWED_CHARS)
// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
let regexp = new RegExp('^(xrb|nano)_([' + ALLOWED_CHARS + ']{60})$')

const nanoValidator: TChecksumValidator = {
  isValidAddress: function (address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address)
    }

    return false
  },

  verifyChecksum: function (address) {
    let bytes = codec.decode(regexp.exec(address)[2]).slice(-37)
    // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
    let computedChecksum = cryptoUtils.blake2b(cryptoUtils.toHex(bytes.slice(0, -5)), 5)
    let checksum = cryptoUtils.toHex(bytes.slice(-5).reverse())

    return computedChecksum === checksum
  }
}

export default nanoValidator
