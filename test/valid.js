var address = require('..');
var assert = require('assert');

test('valid', function() {
    function validate(addr, type) {
        assert.ok(address.validate(addr, type));
    };
//----------------BTC ADDRESSES--------------------------------
    validate('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
    validate('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'bitcoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoinTestnet');

    validate('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP');
    validate('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y');
    validate('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs');
    validate('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
    validate('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

    // p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoinTestnet');
});

