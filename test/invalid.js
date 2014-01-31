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
    invalid('LSxNsEQekEpXMS4B7tUYstMEdMyH321ZQ1', 'bitcoinTestnet');
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'bitcoinTestnet');
    invalid('%%@');
        
//----------------LTC ADDRESSES--------------------------------
    invalid('', 'litecoin'); //reject blank
    invalid('%%@', 'litecoin'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'litecoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'litecoin');  //reject transaction id's

    invalid('', 'litecoinTestnet'); //reject blank
    invalid('%%@', 'litecoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'litecoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'litecoinTestnet');  //reject transaction id's
    
//----------------PPC ADDRESSES--------------------------------
    invalid('', 'peercoin'); //reject blank
    invalid('%%@', 'peercoin'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'peercoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'peercoin');  //reject transaction id's
    
    invalid('', 'peercoinTestnet'); //reject blank
    invalid('%%@', 'peercoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'peercoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'peercoinTestnet');  //reject transaction id's
    
//----------------DOGE ADDRESSES-------------------------------
    invalid('', 'dogecoin'); //reject blank
    invalid('%%@', 'dogecoin'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'dogecoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'dogecoin');  //reject transaction id's
    
    invalid('', 'dogecoinTestnet'); //reject blank
    invalid('%%@', 'dogecoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'dogecoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'dogecoinTestnet');  //reject transaction id's
    
//----------------FRC ADDRESSES--------------------------------
    invalid('', 'freicoin'); //reject blank
    invalid('%%@', 'freicoin'); //reject invalid base58 string
    invalid('miCVC7QcY917Cz427qTBEUrvBzRapHrupc', 'freicoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'freicoin');  //reject transaction id's
    
    invalid('', 'freicoinTestnet'); //reject blank
    invalid('%%@', 'freicoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'freicoinTestnet');  //reject transaction id's
    
//----------------PTS ADDRESSES--------------------------------
    invalid('', 'protoshares'); //reject blank
    invalid('%%@', 'protoshares'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'protoshares'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'protoshares');  //reject transaction id's
    
    invalid('', 'protosharesTestnet'); //reject blank
    invalid('%%@', 'protosharesTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'protosharesTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'protosharesTestnet');  //reject transaction id's
    
//----------------MEC ADDRESSES--------------------------------
    invalid('', 'megacoin'); //reject blank
    invalid('%%@', 'megacoin'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'megacoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'megacoin');  //reject transaction id's
    
    invalid('', 'megacoinTestnet'); //reject blank
    invalid('%%@', 'megacoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'megacoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'megacoinTestnet');  //reject transaction id's
    
//----------------XPM ADDRESSES--------------------------------
    invalid('', 'primecoin'); //reject blank
    invalid('%%@', 'primecoin'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'primecoin'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'primecoin');  //reject transaction id's
    
    invalid('', 'primecoinTestnet'); //reject blank
    invalid('%%@', 'primecoinTestnet'); //reject invalid base58 string
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'primecoinTestnet'); //reject invalid address
    invalid('bd839e4f6fadb293ba580df5dea7814399989983', 'primecoinTestnet');  //reject transaction id's
    
});

