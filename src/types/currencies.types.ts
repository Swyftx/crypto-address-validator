import { HashFunctions } from "./hashFunctions.types"
import { TAddressTypes } from "./net.types"
import { TBaseValidator, TChecksumValidator } from "./validators.types"

export type TCurrencyName = string
export type TCurrencySymbol = string
export type TCurrencyExpectedLength = 26
export type TCurrencyHashFunction = HashFunctions
export type TCurrencyRegexp = RegExp


export type TCurrency = {
  name: TCurrencyName,
  symbol: TCurrencySymbol,
  validator: TBaseValidator | TChecksumValidator
  addressTypes?: TAddressTypes
  iAddressTypes?: TAddressTypes
  expectedLength?: TCurrencyExpectedLength,
  hashFunction?: TCurrencyHashFunction,
  regex?: TCurrencyRegexp
}

export interface ICurrencies {
  getByNameOrSymbol: (currencyNameOrSymbol: TCurrencyName | TCurrencySymbol) => TCurrency,
  CURRENCIES: TCurrency[]
}

