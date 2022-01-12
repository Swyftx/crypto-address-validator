import BCH from "bchaddrjs-slp";

import { NetTypes } from "./types/net.types";
import { AddressFormats, TBaseValidator } from "./types/validators.types";

const DEFAULT_ADDRESS_FORMAT = AddressFormats.legacy;
const DEFAULT_NETWORK_TYPE = NetTypes.prod;

function isAValidAddress(address) {
  try {
    BCH.decodeAddress(address);
    return true;
  } catch (error) {
    return false;
  }
}

function isValidAddressFormat(addressFormat) {
  let validAddressFormat = false;
  switch (addressFormat) {
    case "all":
      validAddressFormat = true;
      break;
    case BCH.Format.Legacy:
      validAddressFormat = true;
      break;
    case BCH.Format.Bitpay:
      validAddressFormat = true;
      break;
    case BCH.Format.Cashaddr:
      validAddressFormat = true;
      break;
    case BCH.Format.Slpaddr:
      validAddressFormat = true;
      break;
  }

  return validAddressFormat;
}

function isValidNetworkType(address, networkType) {
  networkType = networkType.toLowerCase().trim();
  if (networkType === NetTypes.prod || networkType === NetTypes.testnet) {
    if (networkType === NetTypes.prod) {
      return BCH.isMainnetAddress(address);
    }

    return BCH.isTestnetAddress(address);
  }

  // TODO: check if this is okay? Defaults to true if not prod or testnet? Probably 'both'?
  return true;
}

function isValidBitcoinCashAddress(
  address,
  currency,
  networkType,
  addressFormats
) {
  let isValid = false;

  for (let i = 0; i < addressFormats.length; i++) {
    const addressFormat = addressFormats[i].toLowerCase().trim();
    if (!isValidAddressFormat(addressFormat)) {
      continue;
    }

    try {
      switch (addressFormat) {
        case "all":
          if (isAValidAddress(address)) {
            isValid = true;
          }
          break;
        case BCH.Format.Legacy:
          if (BCH.isLegacyAddress(address)) {
            isValid = true;
          }
          break;
        case BCH.Format.Bitpay:
          if (BCH.isBitpayAddress(address)) {
            isValid = true;
          }
          break;
        case BCH.Format.Cashaddr:
          if (BCH.isCashAddress(address)) {
            isValid = true;
          }
          break;
        case BCH.Format.Slpaddr:
          if (BCH.isSlpAddress(address)) {
            isValid = true;
          }
          break;
      }
    } catch (error) {
      continue;
    }

    if (isValid) {
      break;
    }
  }

  if (!isValid) {
    return false;
  }

  return isValidNetworkType(address, networkType);
}

export const bitcoincashValidator: TBaseValidator = {
  isValidAddress(address, currency, networkType, addressFormats) {
    networkType = networkType || DEFAULT_NETWORK_TYPE;
    if (!addressFormats.length || !Array.isArray(addressFormats)) {
      addressFormats = [DEFAULT_ADDRESS_FORMAT];
    }

    return isValidBitcoinCashAddress(
      address,
      currency,
      networkType,
      addressFormats
    );
  },
};

export default bitcoincashValidator;
