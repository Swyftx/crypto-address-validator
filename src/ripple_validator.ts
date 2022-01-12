import baseX from "base-x";

import cryptoUtils from "./crypto/utils";
import { TChecksumValidator } from "./types/validators.types";

const ALLOWED_CHARS =
  "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp("^r[" + ALLOWED_CHARS + "]{24,34}$");

const rippleValidator: TChecksumValidator = {
  isValidAddress(address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  },

  verifyChecksum(address) {
    const bytes = codec.decode(address);
    const computedChecksum = cryptoUtils.sha256Checksum(
      cryptoUtils.toHex(bytes.slice(0, -4))
    );
    const checksum = cryptoUtils.toHex(bytes.slice(-4));

    return computedChecksum === checksum;
  },
};

export default rippleValidator;
