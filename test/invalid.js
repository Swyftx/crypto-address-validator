var address = require('..');
var assert = require('assert');

test('invalid', function() {
    function invalid(addr, type) {
        assert.ok(!address.validate(addr, type));
    };
//-----------------------BTC ADDRESSES-------------------------------
    invalid('');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin');

    invalid('bd839e4f6fadb293ba580df5dea7814399989983');
    invalid('miCVC7QcY917Cz427qTBEUrvBzRapHrupc');
    invalid('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX');

    // reject litecoin addresses
    invalid('LSxNsEQekEpXMS4B7tUYstMEdMyH321ZQ1', 'bitcoinTestnet');

    // testnet
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'bitcoinTestnet');

    // invalid base58 string
    invalid('%%@');
});

