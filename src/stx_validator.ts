import { c32addressDecode } from 'c32check';
import { TChecksumValidator } from './types/validators.types';

const stxValidator: TChecksumValidator = {
  isValidAddress: function (address, currency, networkType) {
    return this.verifyChecksum(address)
  },

  verifyChecksum: function (address) {
    let valid = false
    try {
      if (c32addressDecode(address)) {
        valid = true
      }
    } catch (e) {
      valid = false
    }
    return valid
  }
}

export default stxValidator
