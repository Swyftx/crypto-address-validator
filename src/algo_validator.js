const { base32 } = require('rfc4648')
const sha512256 = require('js-sha512').sha512_256

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return this.verifyChecksum(address)
  },

  verifyChecksum: function (address) {
    if (address.length !== 58) {
      return false
    } else {
      // Decode base32 Address
      const decoded = Buffer.from(base32.parse(correctPadding(address)))
      const addr = decoded.slice(0, decoded.length - 4)
      const checksum = decoded.slice(-4).toString('hex')

      // Hash Address - Checksum
      const hash = sha512256.create()
      hash.update(addr)
      const code = hash.hex().slice(-8)
      return code === checksum
    }
  }
}

function correctPadding (a) {
  if (a.length % 8 === 0) return a.length
  return a + '='.repeat((8 - a.length % 8))
}
