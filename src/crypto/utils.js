var JsSHA = require('./sha256')
var Blake256 = require('./blake256')
var keccak256 = require('./sha3')['keccak256']
var Blake2B = require('./blake2b')

function numberToHex (number) {
  var hex = Math.round(number).toString(16)
  if (hex.length === 1) {
    hex = '0' + hex
  }
  return hex
}

module.exports = {
  toHex: function (arrayOfBytes) {
    var hex = ''
    for (var i = 0; i < arrayOfBytes.length; i++) {
      hex += numberToHex(arrayOfBytes[i])
    }
    return hex
  },
  sha256: function (hexString) {
    var sha = new JsSHA('SHA-256', 'HEX')
    sha.update(hexString)
    return sha.getHash('HEX')
  },
  sha256Checksum: function (payload) {
    return this.sha256(this.sha256(payload)).substr(0, 8)
  },
  blake256: function (hexString) {
    return new Blake256().update(hexString, 'hex').digest('hex')
  },
  blake256Checksum: function (payload) {
    return this.blake256(this.blake256(payload)).substr(0, 8)
  },
  blake2b: function (hexString, outlen) {
    return new Blake2B(outlen).update(Buffer.from(hexString, 'hex')).digest('hex')
  },
  keccak256: function (hexString) {
    return keccak256(hexString)
  },
  keccak256Checksum: function (payload) {
    return keccak256(payload).toString().substr(0, 8)
  },
  blake2b256: function (hexString) {
    return new Blake2B(32).update(Buffer.from(hexString, 'hex'), 32).digest('hex')
  }
}
