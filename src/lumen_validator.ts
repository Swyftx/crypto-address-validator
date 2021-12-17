const baseX = require('base-x')
const crc = require('crc')

const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

const codec = baseX(ALLOWED_CHARS)
const regexp = new RegExp('^G[' + ALLOWED_CHARS + ']{55}$')

module.exports = {
  /**
     * lumen address validation
     */
  isValidAddress: function (address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address)
    }

    return false
  },

  verifyChecksum: function (encodedAddress) {
    const decodedAddress = codec.decode(encodedAddress)
    const versionByte = decodedAddress[0]
    const payload = decodedAddress.slice(0, -2)
    // const data = payload.slice(1)
    const checksum = decodedAddress.slice(-2)

    if (encodedAddress !== codec.encode(decodedAddress)) {
      // console.log('not base 32')
      return false
    }

    if (versionByte !== 6 << 3) { // ? !== 48
      // console.log('wrong version')
      return false
    }

    const calculatedChecksum = Buffer.alloc(2)
    calculatedChecksum.writeUInt16LE(crc.crc16xmodem(payload), 0)

    if (Buffer.compare(checksum, calculatedChecksum) !== 0) {
      // console.log('checksum missmatch')
      return false
    }

    return true
  }
}
