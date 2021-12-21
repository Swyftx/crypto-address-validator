import btcValidator from './bitcoin_validator'

const regexp = new RegExp('^sys1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}$')

export default  {
  regexp,
  isValidAddress: (address, currency, networkType) => {
    return regexp.test(address) || btcValidator.isValidAddress(address, currency, networkType)
  }
}
