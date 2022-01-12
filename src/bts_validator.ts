import { TAddress, TBaseValidator } from "./types/validators.types";

function isValidBTSAddress(address: TAddress) {
  const regex = /^[a-z0-9-.]+$/g; // Must be numbers and lowercase letters only
  if (address.search(regex) !== -1) {
    return true;
  } else {
    return false;
  }
}

const btsValidator: TBaseValidator = {
  isValidAddress(address, currency, networkType) {
    return isValidBTSAddress(address);
  },
};

export default btsValidator;
