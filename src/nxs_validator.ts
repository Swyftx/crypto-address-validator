import { base58_to_binary } from "base58-js";

import { TBaseValidator } from "./types/validators.types";

function getDecoded(address) {
  try {
    const decoded = base58_to_binary(address);
    return decoded;
  } catch (e) {
    // if decoding fails, assume invalid address
    return null;
  }
}

const nxsValidator: TBaseValidator = {
  isValidAddress(address) {
    const decoded = getDecoded(address);

    if (!decoded) {
      return false;
    }

    if (decoded.length !== 37) {
      return false;
    }

    if (decoded[0] !== 42) {
      return false;
    }

    return true;
  },
};

export default nxsValidator;
