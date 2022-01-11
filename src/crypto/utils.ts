import JsSHA from 'jssha'
import createKeccakHash from 'keccak';
import {bech32 as Bech32} from 'bech32'
import {blake2bHex} from 'blakejs'
import Blake256 from './blake256'


const numberToHex = (number: number): string => {
  let hex = Math.round(number).toString(16)

  if (hex.length === 1) {
    hex = '0' + hex
  }

  return hex
}

// TODO refactor
const toHex = (arrayOfNumbers: number[] | Buffer) => {
  let hex = ''

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    hex += numberToHex(arrayOfNumbers[i])
  }

  return hex
}

const sha256 = (hexString: string): string => {
  var sha = new JsSHA('SHA-256', 'HEX')
  sha.update(hexString)

  return sha.getHash('HEX')
}

const sha256Checksum = (payload: any): string => {
  return sha256(sha256(payload)).substr(0, 8)
}

// Keccak
const keccak256 = (payload: Buffer | string): string =>
  createKeccakHash('keccak256').update(Buffer.from(payload)).digest('hex').toString()

const keccak256Checksum = (payload: Buffer | string): string =>
  keccak256(payload).toString().substr(0, 8)


// Blake
const blake2b = (hexString: string, outlen: number): string => blake2bHex(hexString, undefined, outlen)

const blake2b256 = (hexString: string): string => blake2b(hexString, 32);

// Blake256
const blake256 = (hexString: string): string =>
  new Blake256().update(hexString, 'hex').digest('hex')

const blake256Checksum = (payload: any): string =>
  blake256(blake256(payload)).substr(0, 8)

// Bech32
const bech32 = {
  encode: (payload: any): string => Bech32.encode('', payload),
  decode: (payload: string): {data: number[], hrp: string} => {
    const {prefix, words} = Bech32.decode(payload)

    return {
      data: words,
      hrp: prefix
    }
  }
}

export default {
    numberToHex,
    toHex,
    sha256,
    sha256Checksum,
    blake256,
    blake256Checksum,
    blake2b,
    keccak256Checksum,
    blake2b256,
    keccak256,
    bech32
}
