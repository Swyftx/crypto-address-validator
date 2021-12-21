let ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

// https://github.com/QuantumMechanics/NEM-sdk/blob/4b0b60007c52ff4a89deeef84f9ca95b61c92fca/src/model/address.js#L122
let regexp = new RegExp('^N[' + ALLOWED_CHARS + ']{39}$')

export default {
  isValidAddress: function (address) {
    return regexp.test(address)
  }
}
