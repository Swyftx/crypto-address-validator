// Copyright (c) 2017 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const { bech32, bech32m } = require('bech32')

function convertbits (data, frombits, tobits, pad) {
  var acc = 0
  var bits = 0
  var ret = []
  var maxv = (1 << tobits) - 1
  for (var p = 0; p < data.length; ++p) {
    var value = data[p]
    if (value < 0 || (value >> frombits) !== 0) {
      return null
    }
    acc = (acc << frombits) | value
    bits += frombits
    while (bits >= tobits) {
      bits -= tobits
      ret.push((acc >> bits) & maxv)
    }
  }
  if (pad) {
    if (bits > 0) {
      ret.push((acc << (tobits - bits)) & maxv)
    }
  } else if (bits >= frombits || ((acc << (tobits - bits)) & maxv)) {
    return null
  }
  return ret
}

function decode (hrp, addr, witnessVersion) {
  witnessVersion = witnessVersion || 0
  var dec
  try {
    var decoded
    if (witnessVersion === 0) {
      decoded = bech32.decode(addr)
    } else {
      decoded = bech32m.decode(addr)
    }
    dec = {
      hrp: decoded.prefix,
      data: decoded.words
    }
  }
  catch (e) {
    return null
  }
  if (dec === null || dec.hrp !== hrp || dec.data.length < 1 || dec.data[0] > 16) {
    return null
  }
  var res = convertbits(dec.data.slice(1), 5, 8, false)
  if (res === null || res.length < 2 || res.length > 40) {
    return null
  }
  if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
    return null
  }
  return { version: dec.data[0], program: res }
}

function encode (hrp, version, program, witnessVersion) {
  witnessVersion = witnessVersion || 0
  var words = [version].concat(convertbits(program, 8, 5, true))
  var encoded
  if (witnessVersion === 0) {
    encoded = bech32.encode(hrp, words)
  } else {
    encoded = bech32m.encode(hrp, words)
  }
  if (decode(hrp, encoded, witnessVersion) === null) {
    return null
  }
  return encoded
}

function isValidAddressByWitnessVersion (address, witnessVersion) {
  var hrp = 'bc'
  var ret = decode(hrp, address, witnessVersion)

  if (ret === null) {
    hrp = 'tb'
    ret = decode(hrp, address, witnessVersion)
  }

  if (ret === null) {
    return false
  }

  var recreate = encode(hrp, ret.version, ret.program, witnessVersion)
  return recreate === address.toLowerCase()
}

function isValidAddress (address) {
  return isValidAddressByWitnessVersion(address, 0) || isValidAddressByWitnessVersion(address, 1)
}

module.exports = {
  encode: encode,
  decode: decode,
  isValidAddress: isValidAddress
}
