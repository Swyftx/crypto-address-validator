import btcValidator from './bitcoin_validator'
import { TBaseValidator } from './types/validators.types'

const regexp = new RegExp('^sys1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}$')

const sysValidator: TBaseValidator = {
  isValidAddress: (address, currency, networkType) => {
    return regexp.test(address) || btcValidator.isValidAddress(address, currency, networkType)
  }
}

export default sysValidator
