import { TBaseValidator } from "./types/validators.types";

const ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

// https://github.com/QuantumMechanics/NEM-sdk/blob/4b0b60007c52ff4a89deeef84f9ca95b61c92fca/src/model/address.js#L122
const regexp = new RegExp("^N[" + ALLOWED_CHARS + "]{39}$");

const nemValidator: TBaseValidator = {
  isValidAddress: (address) => regexp.test(address),
};

export default nemValidator;
