import { TCurrency } from "./currencies.types";
import { NetTypes } from "./net.types";

export type TAddress = string;

export type TNetType = NetTypes;

export enum AddressFormats {
  legacy = "legacy",
  slp = "slp",
  cash = "cash",
  cashaddr = "cashaddr",
  unknown = "unknownformat",
  slpaddr = "slpaddr",
  all = "all",
}
export type TAddressFormats = AddressFormats[] | undefined[];

export type TIsValidAddress = (
  address: TAddress,
  currency?: TCurrency,
  networkType?: TNetType,
  addressFormats?: TAddressFormats
) => boolean;

export type TChecksum = (address: TAddress) => boolean;
export type TDecode = (address: TAddress) => number[] | null;

export type TBaseValidator<T = unknown> = {
  isValidAddress: TIsValidAddress;
} & T;

export type TChecksumValidator<T = unknown> = TBaseValidator<
  {
    verifyChecksum: TChecksum;
  } & T
>;

export type TDecodeValidator<T = unknown> = TBaseValidator<
  {
    getDecoded: TDecode;
  } & T
>;
