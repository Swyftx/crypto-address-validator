import { TAddress, TBaseValidator } from "./types/validators.types";

function isValidHBarAddress(address: TAddress) {
  const split = address.split(".");
  if (split[0] !== "0" || split[1] !== "0") {
    return false;
  }
  if (split[2].length <= 6 && /^\d+$/g.test(split[2])) {
    return true;
  }
}

const hbarValidator: TBaseValidator = {
  isValidAddress: isValidHBarAddress,
};

export default hbarValidator;
