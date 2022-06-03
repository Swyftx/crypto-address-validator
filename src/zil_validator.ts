import utils from "./crypto/utils";
import { TChecksumValidator } from "./types/validators.types";

const ALLOWED_CHARS = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";

const regexp = new RegExp("^(zil)1([" + ALLOWED_CHARS + "]+)$"); // zil + bech32 separated by '1'

const zilValidator: TChecksumValidator = {
  isValidAddress(address, currency, networkType) {
    const match = regexp.exec(address);
    if (match !== null) {
      return this.verifyChecksum(address);
    } else {
      return false;
    }
  },

  verifyChecksum(address) {
    const decoded = utils.bech32.decode(address);
    if (decoded !== null) {
      return decoded.data.length === 32;
    } else {
      return false;
    }
  },
};

export default zilValidator;
