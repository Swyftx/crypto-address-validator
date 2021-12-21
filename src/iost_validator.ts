import { TBaseValidator } from "./types/validators.types"

const iostRegex = new RegExp('^[a-z0-9_]{5,11}$')

export const iostValidator: TBaseValidator = {
  isValidAddress: (address) => iostRegex.test(address)
}

export default iostValidator
