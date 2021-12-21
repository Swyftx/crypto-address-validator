import { TCurrency, TCurrencyName } from "./currencies.types";
import { TAddress, TAddressFormats, TNetworkType } from "./validators.types";

export type TIsValidAddress = (

) => boolean


export interface IValidator {
  validate: (
    address: TAddress,
    currency?: TCurrencyName,
    networkType?: TNetworkType,
    addressFormats?: TAddressFormats
  ) => Boolean,
  CURRENCIES: TCurrency[]
}


