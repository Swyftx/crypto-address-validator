import { TCurrency } from "./currencies.types"

export type TAddress = string

export type TNetworkType = string
export enum AddressFormats {
  legacy = 'legacy',
  slp = 'slp',
  cash = 'cash',
  cashaddr = 'cashaddr',
  unknown = 'unknownformat',
  slpaddr = 'slpaddr',
  all = 'all'
}
export type TAddressFormats = AddressFormats[] | undefined[]

export type TIsValidAddress = (
  address: TAddress,
  currency?: TCurrency,
  networkType?: TNetworkType,
  addressFormats?: TAddressFormats
) => boolean

export type TChecksum = (address: TAddress) => boolean

export type TBaseValidator<T = unknown> = {
  isValidAddress: TIsValidAddress
} & T

export type TChecksumValidator<T = unknown> = TBaseValidator<{
  verifyChecksum: TChecksum
} & T>

