import base58 from "bs58";

import { TDecodeBuffer, TDecodeValidator } from "./types/validators.types";

const getDecoded: TDecodeBuffer = (address) => {
  try {
    return base58.decode(address);
  } catch (e) {
    // if decoding fails, assume invalid address
    return null;
  }
};

const xtzValidator: TDecodeValidator = {
  isValidAddress: (address) => {
    const decoded = getDecoded(address);

    if (!decoded || !ArrayBuffer.isView(decoded) || decoded.length !== 27) {
      return false;
    }

    return true;
  },
  getDecoded: (address) => Array.from(getDecoded(address)),
};

export default xtzValidator;
