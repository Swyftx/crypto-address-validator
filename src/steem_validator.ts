import { TBaseValidator } from "./types/validators.types";

const accountRegex = new RegExp("^[a-z0-9-.]{3,}$");
const segmentRegex = new RegExp("^[a-z][a-z0-9-]+[a-z0-9]$");
const doubleDashRegex = new RegExp("--");

const steemValidator: TBaseValidator = {
  isValidAddress(address, currency, networkType) {
    if (!accountRegex.test(address)) {
      return false;
    }

    const segments = address.split(".");
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (segment.length < 3) {
        return false;
      }

      if (!segmentRegex.test(segment)) {
        return false;
      }

      if (doubleDashRegex.test(segment)) {
        return false;
      }
    }

    return true;
  },
};

export default steemValidator;
