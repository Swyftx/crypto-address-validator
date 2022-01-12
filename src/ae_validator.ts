import base58 from "bs58";

import { TChecksumValidator } from "./types/validators.types";

const ALLOWED_CHARS =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const regexp = new RegExp("^(ak_)([" + ALLOWED_CHARS + "]+)$"); // Begins with ak_ followed by

const aeValidator: TChecksumValidator = {
  isValidAddress(address) {
    const match = regexp.exec(address);
    if (match !== null) {
      return this.verifyChecksum(match[2]);
    } else {
      return false;
    }
  },

  verifyChecksum: (address) => {
    const decodedBuffer = base58.decode(address);
    return decodedBuffer.length === 32 + 4; // add 4 because base is adding 4 characters, why is base 58 adding them?
  },
};

export default aeValidator;
