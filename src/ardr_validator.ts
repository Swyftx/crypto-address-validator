import { TBaseValidator } from "./types/validators.types";

const ardorRegex = new RegExp("^ARDOR(-[A-Z0-9]{4}){3}(-[A-Z0-9]{5})$");

const ardrValidation: TBaseValidator = {
  isValidAddress(address) {
    if (!ardorRegex.test(address)) {
      return false;
    }

    return true;
  },
};

export default ardrValidation;
