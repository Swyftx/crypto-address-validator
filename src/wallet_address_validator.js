(function (isNode) {
    var base58, cryptoUtils;

    if(isNode) {
        base58 = require('./base58');
        cryptoUtils = require('./crypto_utils');
    } else {
        var imports = window.WAValidator.__imports;
        base58 = imports.base58;
        cryptoUtils = imports.cryptoUtils;
    }

    var DEFAULT_CURRENCY = 'bitcoin',
        ADDRESS_TYPE = {
            P2PKH: {
                bitcoin: '00',      //  0 Decimal 1 prefix
                bitcoinTestnet: '6f',   //111 Decimal mn prefix
                litecoin: '30',         // 48 Decimal L prefix
                litecoinTestnet: '6f',  //111 Decimal mn prefix
                peercoin: '37',         // 55 Decimal P prefix
                peercoinTestnet: '6f',  //111 Decimal mn prefix
                dogecoin: '1e',         // 30 Decimal D prefix
                dogecoinTestnet: '71',  //113 Decimal n prefix
                beavercoin: '19',       // 25 Decimal B prefix
                beavercoinTestnet: '6f',    //111 Decimal mn prefix
                freicoin: '00',         //  0 Decimal 1 prefix
                freicoinTestnet: '6f',  //111 Decimal mn prefix
                protoshares: '38',      // 56 Decimal P prefix
                protosharesTestnet: '6f', //111 Decimal mn prefix
                megacoin: '32',     // 50 Decimal M prefix
                megacoinTestnet: '6f',  //111 Decimal mn prefix
                primecoin: '17',        // 23 Decimal A prefix
                primecoinTestnet: '6f', //111 Decimal mn prefix
                auroracoin: '17',       // 23 Decimal A prefix
                auroracoinTestnet: '6f',    //111 Decimal mn prefix
                namecoin: '34'
            },
            P2SH: {
                bitcoin: '05',      //  5 Decimal 3 prefix
                bitcoinTestnet: 'c4',   //196 Decimal 2 prefix
                litecoin: '05',     //  5 Decimal 3 prefix
                litecoinTestnet: 'c4',  //196 Decimal 2 prefix
                peercoin: '75',     //117 Decimal p prefix
                peercoinTestnet: 'c4',  //196 Decimal 2 prefix
                dogecoin: '16',     //22 Decimal 9A prefix
                dogecoinTestnet: 'c4',  //196 Decimal 2 prefix
                beavercoin: '05',       //  5 Decimal 3 prefix
                beavercoinTestnet: 'c4',    //196 Decimal 2 prefix
                freicoin: '05',     //  5 Decimal 3 prefix
                freicoinTestnet: 'c4',  //196 Decimal 2 prefix
                protoshares: '05',      //  5 Decimal 3 prefix
                protosharesTestnet: 'c4',//196 Decimal 2 prefix
                megacoin: '05',     //  5 Decimal 3 prefix
                megacoinTestnet: 'c4',  //196 Decimal 2 prefix
                primecoin: '53',        // 83 Decimal a prefix
                primecoinTestnet: 'c4',  //196 Decimal 2 prefix
                auroracoin: '05',       // 83 Decimal a prefix
                auroracoinTestnet: 'c4' //196 Decimal 2 prefix
            }
        };

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

        validate: function (address, currency) {
            currency = currency || DEFAULT_CURRENCY;
            var addressType = this.getAddressType(address);
            var correctP2PKH = addressType === ADDRESS_TYPE.P2PKH[currency];
            var correctP2SH = addressType === ADDRESS_TYPE.P2SH[currency];
            return correctP2PKH || correctP2SH
                
        }
    };

    // export WAValidator module
    if(isNode) {
        module.exports = WAValidator;
    } else {
        window.WAValidator = WAValidator;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');


