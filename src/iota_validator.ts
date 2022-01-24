import IOTA from "@iota/validators";

import { TBaseValidator, TIsValidAddress } from "./types/validators.types";

const isValidIotaAddress: TIsValidAddress = (address) => {
  const isValid = IOTA.isAddress(address);
  return isValid;
};

const iotaValidator: TBaseValidator = {
  isValidAddress: isValidIotaAddress,
};

export default iotaValidator;
