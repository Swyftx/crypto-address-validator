var address = require('..');
var assert = require('assert');

test('invalid', function() {
	function invalid(addr, type) {
		assert.ok(!address.validate(addr, type));
	};
//----------------COMMON TESTS---------------------------------
	function commontests(coin) {
		invalid('', coin); //reject blank
		invalid('%%@', coin); //reject invalid base58 string
		invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', coin); //reject invalid address
		invalid('bd839e4f6fadb293ba580df5dea7814399989983', coin);  //reject transaction id's
		//testnet
		invalid('', coin + 'Testnet'); //reject blank
		invalid('%%@', coin + 'Testnet'); //reject invalid base58 string
		invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', coin + 'Testnet'); //reject invalid address
		invalid('bd839e4f6fadb293ba580df5dea7814399989983', coin + 'Testnet');  //reject transaction id's
	}
//----------------BTC ADDRESSES--------------------------------
	commontests('bitcoin');
//----------------LTC ADDRESSES--------------------------------
      commontests('litecoin');
//----------------PPC ADDRESSES--------------------------------
      commontests('peercoin');
//----------------DOGE ADDRESSES-------------------------------
      commontests('dogecoin');
//----------------FRC ADDRESSES--------------------------------
      commontests('freicoin');
//----------------PTS ADDRESSES--------------------------------
      commontests('protoshares');
//----------------MEC ADDRESSES--------------------------------
      commontests('megacoin');
//----------------XPM ADDRESSES-------------------------------
      commontests('primecoin');
//----------------AUR ADDRESSES-------------------------------
      commontests('auroracoin');
//----------------NMC ADDRESSES-------------------------------
      commontests('namecoin');
});
