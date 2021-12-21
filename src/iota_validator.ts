import IOTA from '@iota/validators'
import { TBaseValidator } from './types/validators.types'

function isValidIotaAddress (address) {
  let isValid = IOTA.isAddress(address)
  return isValid
}

const iotaValidator: TBaseValidator = {
  isValidAddress: isValidIotaAddress
}

export default iotaValidator
