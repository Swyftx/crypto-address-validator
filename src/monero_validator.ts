import cnBase58 from "./crypto/cnBase58";
import cryptoUtils from "./crypto/utils";
import { TCurrency } from "./types/currencies.types";
import { NetTypes, TAddressType } from "./types/net.types";
import { TAddress, TBaseValidator } from "./types/validators.types";

// TODO refactor

const DEFAULT_NETWORK_TYPE = NetTypes.prod;
const addressRegTest = new RegExp(
  "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$"
);
const integratedAddressRegTest = new RegExp(
  "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$"
);

const validateNetwork = (
  decoded: string,
  currency: TCurrency,
  networkType: NetTypes,
  addressType: TAddress
) => {
  let network = currency.addressTypes;
  if (addressType === "integrated") {
    network = currency.iAddressTypes;
  }

  const networkByte = parseInt(decoded.substr(0, 2), 16).toString();

  switch (networkType) {
    case NetTypes.prod:
      return network.prod.indexOf(networkByte) !== -1;
    case NetTypes.testnet:
      return network.testnet.indexOf(networkByte) !== -1;
    case NetTypes.both:
      return (
        network.prod.indexOf(networkByte) !== -1 ||
        network.testnet.indexOf(networkByte) !== -1
      );
    default:
      return false;
  }
};

function hexToBin(hex: string): null | Uint8Array {
  if (hex.length % 2 !== 0) return null;
  const res = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return res;
}

export const moneroValidator: TBaseValidator = {
  isValidAddress(address, currency, networkType) {
    networkType = networkType || DEFAULT_NETWORK_TYPE;
    let addressType: TAddressType = "standard";
    if (!addressRegTest.test(address)) {
      if (integratedAddressRegTest.test(address)) {
        addressType = "integrated";
      } else {
        return false;
      }
    }

    const decodedAddrStr = cnBase58.decode(address);
    if (!decodedAddrStr) {
      return false;
    }

    if (!validateNetwork(decodedAddrStr, currency, networkType, addressType)) {
      return false;
    }

    const addrChecksum = decodedAddrStr.slice(-8);
    const hashChecksum = cryptoUtils.keccak256Checksum(
      Buffer.from(hexToBin(decodedAddrStr.slice(0, -8)))
    );

    return addrChecksum === hashChecksum;
  },
};

export default moneroValidator;
