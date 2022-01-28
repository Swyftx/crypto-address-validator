import base58 from "bs58";
import cbor from "cbor";
import crc32 from "crc/crc32";

import { TBaseValidator, TDecodeBuffer } from "./types/validators.types";

const getDecoded: TDecodeBuffer = (address) => {
  try {
    const decodedRaw = base58.decode(address);
    return cbor.decode(decodedRaw.buffer);
  } catch (e) {
    // if decoding fails, assume invalid address
    return null;
  }
};

const cardanoValidation: TBaseValidator = {
  isValidAddress(address) {
    const decoded = getDecoded(address);

    if (!decoded || (!Array.isArray(decoded) && decoded.length !== 2)) {
      return false;
    }

    const tagged = decoded[0];
    const validCrc = decoded[1];
    if (typeof validCrc !== "number") {
      return false;
    }

    // get crc of the payload
    const crc = crc32(new Uint8Array(tagged));

    return crc === validCrc;
  },
};

export default cardanoValidation;
