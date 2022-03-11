import { bech32 as Bech32 } from "bech32";
// @ts-ignore types are not available atm
import createBlakeHash from "blake-hash";
import { blake2bHex } from "blakejs";
import JsSHA from "jssha";
import createKeccakHash from "keccak";

export const numberToHex = (number: number): string => {
  let hex = Math.round(number).toString(16);

  if (hex.length === 1) {
    hex = "0" + hex;
  }

  return hex;
};

// TODO refactor
export const toHex = (arrayOfNumbers: number[] | Buffer) => {
  let hex = "";

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    hex += numberToHex(arrayOfNumbers[i]);
  }

  return hex;
};

export const sha256 = (hexString: string): string => {
  const sha = new JsSHA("SHA-256", "HEX");
  sha.update(hexString);

  return sha.getHash("HEX");
};

export const sha256Checksum = (payload: any): string => {
  return sha256(sha256(payload)).substr(0, 8);
};

// Keccak
export const keccak256 = (payload: Buffer | string): string =>
  createKeccakHash("keccak256")
    .update(Buffer.from(payload))
    .digest("hex")
    .toString();

export const keccak256Checksum = (payload: Buffer | string): string =>
  keccak256(payload).toString().substr(0, 8);

// Blake
export const blake2b = (hexString: string, outlen: number): string =>
  blake2bHex(hexString, undefined, outlen);

export const blake2b256 = (hexString: string): string => blake2b(hexString, 32);

// Blake256
export const blake256 = (hexString: string): string =>
  createBlakeHash("blake256").update(hexString, "hex").digest("hex");

export const blake256Checksum = (payload: any): string =>
  blake256(blake256(payload)).substr(0, 8);

// Bech32
export const bech32 = {
  // bech32 npm package prefix argument/property is bech32 HRP
  // Read more here https://support.avax.network/en/articles/4587392-what-is-bech32
  encode: (hrp: string, payload: ArrayLike<number>): string =>
    Bech32.encode(hrp, payload),
  decode: (payload: string): { data: number[]; hrp: string } => {
    try {
      const { prefix, words } = Bech32.decode(payload);

      const base32Part = words;
      return {
        data: base32Part,
        hrp: prefix,
      };
    } catch {
      return null;
    }
  },
};

export default {
  numberToHex,
  toHex,
  sha256,
  sha256Checksum,
  blake256,
  blake256Checksum,
  blake2b,
  keccak256Checksum,
  blake2b256,
  keccak256,
  bech32,
};
