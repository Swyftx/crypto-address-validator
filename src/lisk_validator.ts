import { TAddress, TBaseValidator } from "./types/validators.types"

function isValidLiskAddress (address: TAddress) {
  let regex = /^[0-9]{1,20}L$/g // Must be numbers only for the first 1 - 20 charactors with a capital L at the end
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

const liskValidator: TBaseValidator = {
  isValidAddress: isValidLiskAddress
}

export default liskValidator
