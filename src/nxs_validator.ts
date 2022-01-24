import base58 from "bs58";

import { TBaseValidator, TDecodeBuffer } from "./types/validators.types";

const getDecoded: TDecodeBuffer = (address) => {
  try {
    const decoded = base58.decode(address);
    return decoded;
  } catch (e) {
    // if decoding fails, assume invalid address
    return null;
  }
};

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
