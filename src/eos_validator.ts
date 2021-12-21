import { TAddress, TBaseValidator } from "./types/validators.types"

function isValidEOSAddress (address: TAddress) {
  let regex = /^[a-z0-9]+$/g // Must be numbers and lowercase letters only
  if (address.search(regex) !== -1 && address.length === 12) {
    return true
  } else {
    return false
  }
}

const eosValidation: TBaseValidator = {
  isValidAddress: isValidEOSAddress
}


export default eosValidation
