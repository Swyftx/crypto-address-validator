import currencies from "./currencies";
import {
  Currencies,
  HashFunctions,
  IValidator,
  NetTypes,
  Validators,
} from "./types";

const DEFAULT_CURRENCY_NAME = "bitcoin";

const walletAddressValidator: IValidator = {
  /**
   * Checks if a given address is valid for the given currency
   *
   * @param {String} address The target address
   * @param {String} currencyNameOrSymbol The name or the symbol/ticker of the currency
   * @param {String} [networkType] Network Type. Could be 'prod', 'both' and 'testnet'
   * @param {Array} [addressFormats] Array of formats. For example ['legacy', 'slp ', 'cash']
   * @returns {Error|boolean}
   *
   * @throws {InvalidArgumentException} Error(`Missing validator for currency: ${currencyNameOrSymbol}`)
   */
  validate(address, currencyNameOrSymbol, networkType, addressFormats) {
    const currency = currencies.getByNameOrSymbol(
      currencyNameOrSymbol || DEFAULT_CURRENCY_NAME
    );

    if (currency && currency.validator) {
      if (!Array.isArray(addressFormats)) {
        addressFormats = [];
      }

      return currency.validator.isValidAddress(
        address,
        currency,
        networkType,
        addressFormats
      );
    }

    throw new Error("Missing validator for currency: " + currencyNameOrSymbol);
  },

  CURRENCIES: currencies.CURRENCIES,
};

export default walletAddressValidator;
export type { Currencies, HashFunctions, NetTypes, IValidator, Validators };
