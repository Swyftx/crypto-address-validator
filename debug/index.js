const path = require('path')
const Validator = require(path.join(__dirname, '..', 'src', 'wallet_address_validator'))

// Search All Existing Validators
// Validator.CURRENCIES.forEach(coin => {
//   const valid = Validator.validate('BNYPJMBTMNKL3GD2S3F3VF2F5F72EABT2DQWXWEJRWUKN32HK3NQ4CWRRA', coin.symbol)
//   if (valid) console.log(coin.symbol)
// })

// console.log(Validator.validate('tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx', 'xtz'))
// console.log(Validator.validate('SP1P72Z3704VMT3DMHPP2CB8TGQWGDBHD3RPR9GZS', 'stx'))
// console.log(Validator.validate('0x9C6C63aA0cD4557d7aE6D9306C06C093A2e35408', 'lend'))

// console.log(Validator.validate('f52c684f95e272c2397475ea74003b3285bfb82873fccdc8c470ac3e721b76ff', 'eng'))
// console.log(Validator.validate('880e7fedd4cf59b1c170b3bcdf8dc124f580c7cad7271b3f1dd31b688271453a', 'eng'))
console.log(Validator.validate('SP1YWFP80QE1GD65MPGCXE509R0662DXJ9ANCKWDD', 'stx'))
