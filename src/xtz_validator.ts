import { base58_to_binary } from "base58-js";

import { TDecode, TDecodeValidator } from "./types/validators.types";

const getDecoded: TDecode = (address) => {
  try {
    return base58_to_binary(address);
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
  getDecoded,
};

export default xtzValidator;
