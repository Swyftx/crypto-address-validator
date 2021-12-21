import { TBaseValidator } from "./types/validators.types"

function isValidICXAddress (address, currency, networkType) {
  let regex = /^hx[0-9a-f]{40}$/g // Begins with hx followed by 40 hex chars
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

const icxValidator: TBaseValidator = {
  isValidAddress: isValidICXAddress
}

export default icxValidator
