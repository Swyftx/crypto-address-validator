const base58 = require('./crypto/base58')
const cbor = require('cbor')
const crc32 = require('crc-32')

function isValidAdaAddress (address, currency, networkType) {
  var decodedAddr = base58.decode(address)
  decodedAddr = cbor.decode(Buffer.from(decodedAddr))
  var taggedAddr = decodedAddr[0]
  if (taggedAddr === undefined) {
    return false
  }
  var addrChecksum = decodedAddr[1]
  var calculatedChecksum = crc32.buf(taggedAddr.value)
  console.log('DECODED ADDRESS', taggedAddr.value.toString('hex'))
  console.log('CALCULATED CHECKSUM', calculatedChecksum)
  console.log('CHECKSUM:', addrChecksum)
  return calculatedChecksum === addrChecksum
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidAdaAddress(address, currency, networkType)
  }
}
