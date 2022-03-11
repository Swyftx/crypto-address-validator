import { TBaseValidator, TIsValidAddress } from "./types/validators.types";

const isValidSCAddress: TIsValidAddress = (address) => {
  const regex = /^[0-9a-f]{76}$/g; // 76 hex chars
  if (address.search(regex) !== -1) {
    return true;
  } else {
    return false;
  }
};

const scValidator: TBaseValidator = {
  isValidAddress: isValidSCAddress,
};

export default scValidator;
