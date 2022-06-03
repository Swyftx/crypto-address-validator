import baseX from "base-x";
import crc16xmodem from "crc/calculators/crc16xmodem";

import { TChecksumValidator } from "./types/validators.types";

const ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp("^G[" + ALLOWED_CHARS + "]{55}$");

const lumenValidator: TChecksumValidator = {
  isValidAddress(address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  },

  verifyChecksum(encodedAddress) {
    const decodedAddress = codec.decode(encodedAddress);
    const versionByte = decodedAddress[0];
    const payload = decodedAddress.slice(0, -2);
    const checksum = decodedAddress.slice(-2);

    if (encodedAddress !== codec.encode(decodedAddress)) {
      // not base 32'
      return false;
    }

    if (versionByte !== 6 << 3) {
      // ? !== 48
      // wrong version
      return false;
    }

    const calculatedChecksum = Buffer.alloc(2);
    calculatedChecksum.writeUInt16LE(crc16xmodem(payload), 0);

    if (Buffer.compare(checksum, calculatedChecksum) !== 0) {
      // checksum missmatch
      return false;
    }

    return true;
  },
};

export default lumenValidator;
