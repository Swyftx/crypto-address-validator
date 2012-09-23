var address = require('..');
var assert = require('assert');

test('invalid', function() {
    function invalid(addr, type) {
        assert.ok(!address.validate(addr, type));
    };

    invalid('');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe');
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'testnet');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'prod');

    // invalid base58 string
    invalid('%%@');
});

