import { TCurrency, TCurrencyName } from "./currencies.types";
import { TAddress, TAddressFormats, TNetType } from "./validators.types";

export interface IValidator {
  validate(
    address: TAddress,
    currency?: TCurrencyName,
    networkType?: TNetType,
    addressFormats?: TAddressFormats
  ): boolean;
  CURRENCIES: TCurrency[];
}
