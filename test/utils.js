/* global describe it */

var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined'

var chai = isNode ? require('chai') : window.Chai
var expect = chai.expect

var blake2b = require('../src/crypto/blake2b')

describe('blake2b', function () {
    describe('streaming', function () {
        var output = new Uint8Array(64)
        var input = Buffer.from('hello world')

        console.log(new blake2b(output.length).update(input).digest('hex'))
    })
})