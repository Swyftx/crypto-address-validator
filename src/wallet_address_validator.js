(function (isNode) {
    var base58, cryptoUtils, currencies;

    if(isNode) {
        base58 = require('./base58');
        cryptoUtils = require('./crypto_utils');
        currencies = require('./currencies');
    } else {
        var imports = window.WAValidator.__imports;
        base58 = imports.base58;
        cryptoUtils = imports.cryptoUtils;
        currencies = imports.currencies;
    }

    var DEFAULT_CURRENCY_NAME = 'bitcoin',
        DEFAULT_NETWORK_TYPE = 'prod';

    var WAValidator = {
        getAddressType: function (address) {
            var decoded;
            try {
                decoded = base58.decode(address);
            } catch (e) {
                // if decoding fails, assume invalid address
                return null;
            }

            var length = decoded.length;

            // should be 25 bytes per btc address spec
            if (length != 25) {
                return null;
            }

            var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
                body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
                goodChecksum = cryptoUtils.sha256(cryptoUtils.sha256(body)).substr(0, 8);

            return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, 1)) : null;
        },

        validate: function (address, currencyNameOrSymbol, networkType) {
            currencyNameOrSymbol = currencyNameOrSymbol || DEFAULT_CURRENCY_NAME;
            networkType = networkType || DEFAULT_NETWORK_TYPE;

            var correctAddressTypes,
                currency = currencies.getByNameOrSymbol(currencyNameOrSymbol),
                addressType = this.getAddressType(address);
            
            if(networkType === 'prod' || networkType === 'testnet'){
                correctAddressTypes = currency.addressTypes[networkType]
            } else {
                correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
            }

            return correctAddressTypes.indexOf(addressType) >= 0;
        }
    };

    // export WAValidator module
    if(isNode) {
        module.exports = WAValidator;
    } else {
        window.WAValidator = WAValidator;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');


