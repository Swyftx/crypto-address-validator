var address = require('..');
var assert = require('assert');

test('valid', function() {
    function validate(addr, type) {
        assert.ok(address.validate(addr, type));
    };
//----------------BTC ADDRESSES--------------------------------
    validate('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin');
    validate('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin');
    validate('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoinTestnet');

    validate('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
    validate('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

    // p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoinTestnet');

//----------------LTC ADDRESSES--------------------------------
    validate('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin');
    validate('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin');
    validate('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoinTestnet');

    // p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoinTestnet');

//----------------PPC ADDRESSES--------------------------------
    validate('PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin');
    validate('PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin');
    validate('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoinTestnet');

    // p2sh addresses
    validate('pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoinTestnet');

//----------------DOGE ADDRESSES-------------------------------
    validate('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin');
    validate('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin');
    validate('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin');
    //NEED A DOGECOIN TESTNET ADDRESS

    //p2sh addresses
    validate('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoinTestnet');

//----------------FRC ADDRESSES--------------------------------
    validate('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin');
    validate('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin');
    validate('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoinTestnet');

    // p2sh addresse
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoinTestnet');

//----------------PTS ADDRESSES--------------------------------
    validate('PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares');
    validate('Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares');
    validate('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protosharesTestnet');

    //p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protosharesTestnet');

//----------------MEC ADDRESSES--------------------------------
    validate('MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin');
    validate('MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin');
    validate('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoinTestnet');

    //p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoinTestnet');

//----------------XPM ADDRESSES--------------------------------
    validate('AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin');
    validate('AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin');
    validate('ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin');
    validate('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoinTestnet');

    //p2sh addresses
    validate('af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoinTestnet');
//----------------AUR ADDRESSES---------------------------------
    validate('ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin');
    validate('AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin');
    validate('AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin');
    validate('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoinTestnet');

    //p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoinTestnet');
});
